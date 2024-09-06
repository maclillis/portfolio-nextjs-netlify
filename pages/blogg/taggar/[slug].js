import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {Breadcrumbs, BreadcrumbItem, Link, Divider} from "@nextui-org/react";
import { client } from '../../../sanity/lib/client';
import { format } from 'date-fns';

import Truncate from '../../../components/utils/TruncateText';
import styles from './[slug].module.scss';

const tagQuery = `*[_type == "tag" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    "posts": *[_type == "blog" && references(^._id)]{
        title,
        slug,
        body,
        publishedAt,
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
        "authorName": author->name,
    }
}`;

export async function getStaticPaths() {
const query = `*[_type == "tag"]{
    title,
    slug
}`

const tags = await client.fetch(query)
const paths = tags
    .filter(tag => tag.slug?.current) // Ensure we only include valid slugs
    .map(tag => ({
    params: { slug: tag.slug.current }
}))

return {
    paths,
    fallback: true,
}
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const tag = await client.fetch(tagQuery, { slug })

    // If no tag is found, return a 404 page
    if (!tag || !tag.title) {
        return {
        notFound: true,
        }
    }
  
    return {
      props: {
        tag: {
          title: tag.title || 'Namnlös',
          description: tag.description,
          slug: tag.slug.current,
        },
        posts: tag.posts || [],
      },
    }
  }
  

export default function TagPage({ tag, posts }) {

    const { ref, inView } = useInView({
        triggerOnce: true, // Load the post only once when it enters the viewport
        threshold: 0.1,    // Load when 10% of the element is visible
      });

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    if (!posts || !tag) {
        return <p>Laddar innehåll...</p>;
      }
    
    return (
    <div className="container m-auto pt-24 h-full">
        <Head>
            <title>{`Inlägg taggade med: ${tag.title}| Marcus Liljehammar - Webbutvecklare & UX/UI Designer`}</title>
            <link rel="canonical" href={`${baseURL}/blogg/taggar/${tag.slug}`} />
            <meta name="description" content={`Utforska alla mina inlägg under taggen "${tag.title}" här på min blogg.`} />
        </Head>
        <Header />

        <main className={`${styles.blog_main} w-full px-5 flex items-start justify-start lg:max-w-5xl m-auto`}>
            <section className="top_section">
            <h1 className="page_title">Inlägg taggade med: {tag.title}</h1>

            <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                <BreadcrumbItem>
                    <Link href="/">Hem</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href="/blogg">Blogg</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Taggar
                </BreadcrumbItem>
                <BreadcrumbItem>{tag.title}</BreadcrumbItem>
            </Breadcrumbs>

            <p className="section_description lg:max-w-2xl">{tag.description}</p>
            
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {posts.map((blogPost) => (
                    <article key={blogPost.slug.current} ref={ref} className="pt-7">
                        {inView && (
                        <>
                        {blogPost.featured && (
                            <Link href={`/blogg/${blogPost.slug.current}`}>
                                <Image
                                    src={blogPost.featured.asset.url}
                                    width={824}
                                    height={346}
                                    quality={50}
                                    alt={blogPost.featured.alt}
                                    className={`${styles.post_feat_image} my-5 w-full`}
                                    priority
                            />
                            </Link>
                        )}

                        <Link href={`/blogg/${blogPost.slug.current}`}>
                            <h2 className="h-18 overflow-hidden"><Truncate text={blogPost.title} maxLength={50} lines={3} /></h2>
                        </Link>

                        <p className="listing_blog_datestamp pt-4">{format(new Date(blogPost.publishedAt), 'd MMMM yyy, H:I')}</p>
                        <div className="listing_blog_excerpt py-6 h-30">
                           <Truncate text={blogPost.exerpt} maxLength={130} lines={6} />
                        </div>

                        <div className="tags_wrap h-14">TAGGAR:
                            {blogPost.tags && 
                                blogPost.tags.map((tag, index)=>(
                                <Link key={index} href={`/blogg/taggar/${tag.slug.current}`}>
                                    <span  className="tag_ ps-1">
                                        {tag.title}
                                        {index < blogPost.tags.length - 1 && ', '}
                                    </span>
                                </Link>
                                ))
                            }
                        </div>
                        <Link href={`/blogg/${blogPost.slug.current}`} className="link_button py-6 px-0 w-full">Läs hela inlägget</Link>

                        <Divider />
                       </>
                    )}
                    </article>
                ))}
            </section>
        </main>
        <Footer />
    </div>
    )
}