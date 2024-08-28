import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import Image from 'next/image';
import {Breadcrumbs, BreadcrumbItem, Link} from "@nextui-org/react";
import { fetchSanity } from '../../utils/fetchSanity';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';

import styles from './[slug].module.scss';

export async function getServerSideProps({ params }) {
    const workQuery = `*[_type == "work" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      body,
      tools,
      publishedAt,
      excerpt,
      links {
      github,
      figma
      },
      tags{
      _key
      },
      featured{
        asset->{
          _id,
          url
        },
        alt
      },
      "authorName": author->name,
      "authorImage": author->profilepic,
    }`;

    const { slug } = params;
    const workPost = await fetchSanity(workQuery, { slug });
  
    return {
      props: {
        workPost,
      },
    };
}

export default function WorkSingle({workPost}) {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "headline": workPost.title,
        "image": workPost.featured.asset.url,
        "author": {
          "@type": "Person",
          "name": "Marcus Liljehammar",
        },
        "datePublished": workPost.publishedAt,
        "dateModified": workPost.modifiedAt || workPost.publishedAt,
        "description": workPost.excerpt,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseURL}/projekt/${workPost.slug.current}`,
        },
        "url": `${baseURL}/projekt/${workPost.slug.current}`, // Link to the live project or portfolio item
      };


    return (
    <div className="container m-auto pt-14 h-full">
        <Head>
            <title>{workPost.title + " | Marcus Liljehammar - Webbutvecklare & UX/UI Designer"}</title>
            <meta name="description" content={workPost.excerpt} />
            <link rel="canonical" href={`${baseURL}/projekt/${workPost.slug.current}`} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={workPost.title} />
            <meta property="og:description" content={workPost.excerpt} />
            <meta property="og:image" content={workPost.featured.asset.url} />
            <meta property="og:url" content={`${baseURL}/projekt/${workPost.slug.current}`} />
            <meta property="article:author" content="Marcus Liljehammar" />
            <meta property="article:published_time" content={workPost.publishedAt} />

            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Head>
        <Header />

        <main className={`${styles.blog_single_main} py-10 w-full px-5 flex items-start justify-start lg:max-w-5xl m-auto lg:pt-14`}>

            <section className={`${styles.post_wrap} w-full px-0 lg:px-32`}>

                <h1 className={`${styles.post_title} lg:max-w-3xl`}>{workPost.title}</h1>

                <Breadcrumbs separator="/" itemClasses={{separator: "py-2 px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                    <BreadcrumbItem>
                        <Link href="/">Hem</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link href="/projekt">Projekt</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem className="breadc_title">{workPost.title}</BreadcrumbItem>
                </Breadcrumbs>

                {workPost.featured && workPost.featured.asset && ( 
                    <Image
                    src={workPost.featured.asset.url}
                    width={824}
                    height={346}
                    alt={workPost.featured.alt}
                    className={`${styles.post_feat_image} my-5 w-full`}
                    priority
                />
                )}

                <div className="listing_single_tools py-2">
                    <PortableText value={workPost.tools}  />
                </div>
                
                <div className={`${styles.post_content} post_content pt-4`}>
                    <PortableText value={workPost.body}  />
                </div>

                { workPost.links.github &&
                    <Link href={workPost.links.github} className="link_github pt-4 px-0 w-full">Gå till repot på Github</Link>
                }
                { workPost.links.figma &&
                    <Link href={workPost.links.figma} className="link_figma pt-2 px-0 w-full text-base">Se designen i Figma</Link>
                }
            </section>
        </main>
        <Footer />
    </div>
    )
}