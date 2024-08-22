import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import React from 'react';
import Image from 'next/image';
import {Breadcrumbs, BreadcrumbItem, Link, Divider} from "@nextui-org/react";
import { useLazyLoadPosts } from '../hooks/LazyLoadPosts';
import { client } from '../sanity/lib/client';
import { formatPublishedAt } from '../utils/formatDate';

import loader from '../public/assets/images/loader_infinity.svg';

import Truncate from '../components/utils/TruncateText';
import styles from './blogg.module.scss';

const baseQuery = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    body,
    publishedAt,
    modifiedAt,
    _createdAt,
    exerpt,
    tags[]->{
    title,
    slug
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
    const totalQuery = `count(*[_type == "blog"])`;
    const total = await client.fetch(totalQuery);
  
    return {
      props: {
        initialPosts,
        total,
        baseQuery,
      },
    };
  }

export default function Blog({initialPosts, total, baseQuery}) {

    const { posts, loading, lastPostRef } = useLazyLoadPosts(initialPosts, total, baseQuery);

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "blogPosts": posts.map((blogPost) => ({
          "@type": "BlogPosting",
          "headline": blogPost.title,
          "url": `${baseURL}/blogg/`,
          "image": blogPost.featured ? blogPost.featured.asset.url : "",
          "description": blogPost.excerpt,
          "datePublished": blogPost._createdAt,
          "author": {
            "@type": "Person",
            "name": blogPost.authorName
          }
        }))
      };
    return (
    <div className="container m-auto h-full">
        <Head>
            <title>Blogg | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
            <link rel="canonical" href={`${baseURL}/blogg/`} />
            <meta name="description" content="Här samlar jag små, roliga och insiktsfulla historier från mitt yrkesliv som täcker ämnen som tech, webben och den digitala världen i sin helhet." />
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Head>
        <Header />

        <main className={`${styles.blog_main} w-full py-24 px-5 flex items-start justify-start lg:max-w-5xl m-auto`}>
            <section>
                <h1 className="page_title">Blogg</h1>

                <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                    <BreadcrumbItem>
                        <Link href="/">Hem</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>Blogg</BreadcrumbItem>
                </Breadcrumbs>

                <p className="section_description lg:max-w-2xl">Här samlar jag små, roliga och insiktsfulla historier från mitt yrkesliv som täcker ämnen som tech, webben och den digitala världen i sin helhet.</p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {posts.map((blogPost, index) => (
                    <article key={blogPost._id} ref={index === posts.length - 1 ? lastPostRef : null} className="pt-7">
                        
                        {blogPost.featured &&
                            <Link href={`/blogg/${blogPost.slug.current}`}>
                                <Image
                                  src={blogPost.featured.asset.url}
                                  width={312}
                                  height={133}
                                  alt={blogPost.featured.alt}
                                  className={`${styles.blog_feat_image} my-5 w-full`}
                                  priority
                                />
                            </Link>
                        }

                        <Link href={`/blogg/${blogPost.slug.current}`}>
                            <h2><Truncate text={blogPost.title} maxLength={50} lines={3} /></h2>
                        </Link>

                        <p className="listing_blog_datestamp pt-4">{formatPublishedAt(blogPost.publishedAt)}</p>
                        <div className="listing_blog_excerpt py-6">
                        <Truncate text={blogPost.exerpt} maxLength={130} lines={6} />
                        </div>

                        <div className="tags_wrap">TAGGAR:
                            {blogPost.tags && blogPost.tags.length > 0 ? (
                                blogPost.tags.map((tag, index)=>(
                                <Link key={index} href={`/blogg/taggar/${tag.slug.current}`}>
                                    <span className="tag_ ps-1">
                                      {tag.title}
                                      {index < blogPost.tags.length - 1 && ', '}
                                    </span>
                                </Link>
                                ))
                            ) : (
                              <span className="no_tag_ ps-1">Inga taggar</span>
                            )}
                        </div>
                        <Link href={`/blog/${blogPost.slug.current}`} className="link_button py-6 px-0 w-full">Läs hela inlägget</Link>

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