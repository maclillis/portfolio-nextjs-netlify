import Head from 'next/head'
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Hero from '@components/home/Hero';
import Tools from '@components/home/Tools';
import ProjectSpotlight from '@components/home/ProjectSpotlight';
import GithubActivity from '@components/home/GithubActivity';
import WebKpis from '@components/home/WebKpis';
import Collaborate from '@components/home/Collaborate';
import Contact from '@components/home/Contact';
import styles from './index.module.scss';
import { fetchSanity } from '../utils/fetchSanity';
import LatestBlog from '@components/home/LatestBlog'

export async function getServerSideProps() {
  const blogQuery = `*[_type == "blog"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    slug,
    body,
    publishedAt,
    exerpt
  }`;

  const workQuery = `*[_type == "work"] | order(_createdAt desc)[0...3]{
    _id,
    title,
    slug,
    body,
    tools,
    publishedAt,
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
          <script type="application/ld+json">
              {JSON.stringify(structuredData)}
          </script>
      </Head>
      <Header />

      <main className={`${styles.main} w-full pb-14 flex items-start justify-start overflow-x-hidden`}>

        <Hero />

        <Tools />

        <ProjectSpotlight workPosts={workPosts} />

        <GithubActivity />

        <LatestBlog blogPosts={blogPosts} />

        <WebKpis />

        <Collaborate />

        <Contact />

      </main>

      <Footer />
    </div>
  )
}
