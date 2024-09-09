import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import Image from 'next/image';
import {Breadcrumbs, BreadcrumbItem, Link, Divider} from "@nextui-org/react";

import useGTMClickHandlers from '../hooks/useGTMClickHandler';

import { PortableText } from '@portabletext/react';
import { useLazyLoadPosts } from '../hooks/LazyLoadPosts';
import { client } from '../sanity/lib/client';

import loader from '../public/assets/images/loader_infinity.svg';
import Truncate from '../components/utils/TruncateText';
import styles from './projekt.module.scss';

const baseQuery = `*[_type == "work"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    body,
    publishedAt,
    _createdAt,
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
    "authorName": author->name
  }`;

export async function getServerSideProps() {

    const initialPosts = await client.fetch(`${baseQuery} [0...3]`);
    const totalQuery = `count(*[_type == "work"])`;
    const total = await client.fetch(totalQuery);
  
    return {
      props: {
        initialPosts,
        total,
        baseQuery,
      },
    };
  }


export default function Work({initialPosts, total, baseQuery}) {

    const { posts, loading, lastPostRef } = useLazyLoadPosts(initialPosts, total, baseQuery);

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const buttonNames = ['github_button', 'figma_button'];
    const handlers = useGTMClickHandlers(buttonNames);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": posts.map((workPost , index) => ({
            "@type": "CreativeWork",
            "position": index + 1,
            "name": workPost.title,
            "url": `${baseURL}/projekt/`,
            "image": workPost.featured ? workPost.featured.asset.url : "",
            "description": workPost.excerpt,
            "datePublished": workPost._createdAt,
            "creator": {
              "@type": "Person",
              "name": workPost.authorName
            }
        }))
      };

    return (
    <div className="container m-auto h-full">
        <Head>
            <title>Jobb | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
            <link rel="canonical" href={`${baseURL}/projekt/`} />
            <meta name="description" content="Här samlar jag alla mina projekt, stora som små som jag jobbat med under åren och känner att jag vill dela med mig av." />
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Head>
        <Header />

        <main className={`${styles.work_main} w-full pt-24 px-6 flex items-start justify-start lg:max-w-5xl m-auto`}>
            <section>
                <h1 className="page_title">Projekt</h1>

                <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                    <BreadcrumbItem>
                        <Link href="/">Hem</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>Projekt</BreadcrumbItem>
                </Breadcrumbs>

                <p className="section_description lg:max-w-2xl">Här samlar jag alla mina projekt, stora som små som jag jobbat med under åren och känner att jag vill dela med mig av.</p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
            {posts.map((workPost, index) => (
                <article key={workPost._id} ref={index === posts.length - 1 ? lastPostRef : null} className="py-7">
                    <Link href={`/projekt/${workPost.slug.current}`}>
                        <Image src={workPost.featured.asset.url} width={312} height={133} quality={50} alt={workPost.featured.alt} className={`${styles.work_feat_image} my-5 w-full`} priority />
                    </Link>
                    <Link href={`/projekt/${workPost.slug.current}`}>
                        <h2 className="h-16">{workPost.title}</h2>
                    </Link>
                        <div className="listing_blog_excerpt py-4 h-24">
                            <Truncate text={workPost.excerpt} maxLength={130} lines={6} />
                        </div>

                        <Link href={`/projekt/${workPost.slug.current}`} className="link_button pt-6 px-0 w-full">Gå till projektet</Link>

                        { workPost.links.github &&
                            <Link onClick={handlers.github_button} href={workPost.links.github} className="link_github pt-2 px-0 w-full" target="_blank">Gå till repot på Github</Link>
                        }
                        { workPost.links.figma &&
                            <Link onClick={handlers.figma_button} href={workPost.links.figma} className="link_figma pt-2 px-0 w-full" target="_blank">Se designen i Figma</Link>
                        }
                        <Divider />
                </article>
            ))}
            {loading && <Image src={loader} width="90" height="90" className="flex justify-center m-auto" />}
            </section>
        </main>
        <Footer />
    </div>
    )
}