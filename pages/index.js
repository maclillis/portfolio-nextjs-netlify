import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from '@components/header/Header';
import Hero from '@components/home/Hero';
import styles from './index.module.scss';
import { fetchSanity } from '../utils/fetchSanity';
import CollaborateLoader from '@components/home/CollaborateLoader';

const LazyTools = dynamic(() => import('@components/home/Tools'), {ssr: false,})
const LazyProjects = dynamic(() => import('@components/home/ProjectSpotlight'), {ssr: false,})
const LazyGithub = dynamic(() => import('@components/home/GithubActivity'), {ssr: false,})
const LazyWebkpis = dynamic(() => import('@components/home/WebKpis'), {ssr: false,})
const LazyCollaborate = dynamic(() => import('@components/home/Collaborate'), {
  loading: () => <CollaborateLoader />
})
const LazyContact = dynamic(() => import('@components/home/Contact'), {ssr: false,})
const LazyBlog = dynamic(() => import('@components/home/LatestBlog'), {ssr: false,})

const LazyFooter = dynamic(() => import('@components/footer/Footer'), {ssr: false,})

export async function getServerSideProps() {
  const blogQuery = `*[_type == "blog"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    slug,
    publishedAt,
    exerpt
  }`;

  const workQuery = `*[_type == "work"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    slug,
    excerpt,
    featured{
      asset->{
        _id,
        url
      },
      alt
    },
  }`;

  const blogPosts = await fetchSanity(blogQuery);
  const workPosts = await fetchSanity(workQuery);

  return {
    props: {
      blogPosts,
      workPosts
    },
  };
}


export default function Home({blogPosts, workPosts}) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Home Page",
      "url": `${baseURL}`,
      "description": "Jag har 12+ års erfarenhet att jobba professionellt med framställandet av vackra, enkla att använda och snabba webbappar och hemsidor som konverterar.",
      "publisher": {
        "@type": "Organization",
        "name": "Marcus Liljehammar Web Developer & UX Designer",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseURL}`,
      }
  };

  return (
    <div className="container max-w-full h-full">
      <Head>
          <title>Marcus Liljehammar | Webbutvecklare & UX/UI Designer</title>
          <link rel="canonical" href={`${baseURL}`} />
          <meta name="description" content="Jag har 12+ års erfarenhet att jobba professionellt med framställandet av vackra, enkla att använda och snabba webbappar och hemsidor som konverterar." />
          <meta property="og:type" content="website" />
          <meta name="title" property="og:title" content="Marcus Liljehammar - Webutvecklare & UX/Digital Designer" />
          <meta name="description" property="og:description" content="Jag har 12+ års erfarenhet att jobba professionellt med framställandet av vackra, enkla att använda och snabba webbappar och hemsidor som konverterar." />
          <meta name="image" property="og:image" content="https://marcusliljehammar.se/assets/images/some_marcus_banner.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta property="og:url" content={`${baseURL}`} />
          <meta name="author" content="Marcus Liljehammar" />

          <script type="application/ld+json">
              {JSON.stringify(structuredData)}
          </script>
      </Head>
      
      <Header />

      <main className={`${styles.main} w-full pb-14 flex items-start justify-start overflow-x-hidden`}>

        <Hero />

        <LazyTools />

        <LazyProjects workPosts={workPosts} />

        <LazyGithub />

        <LazyBlog blogPosts={blogPosts} />

        <LazyWebkpis />

        <LazyCollaborate />

        <LazyContact />

      </main>

      <LazyFooter />
    </div>
  )
}
