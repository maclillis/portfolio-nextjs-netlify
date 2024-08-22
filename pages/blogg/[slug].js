import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import Image from 'next/image';
import {Breadcrumbs, BreadcrumbItem, Link, Avatar} from "@nextui-org/react";
import { fetchSanity } from '../../utils/fetchSanity';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';

import styles from './[slug].module.scss';

export async function getServerSideProps({ params }) {
    const blogQuery = `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      body,
      publishedAt,
      modifiedAt,
      exerpt,
      summary,
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
      "author": author->{
        "imageUrl": image.asset->url
      }
    }`;

    const { slug } = params;
    const blogPost = await fetchSanity(blogQuery, { slug });
  
    return {
      props: {
        blogPost,
      },
    };
}

export default function BlogSingle({blogPost}) {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blogPost.title,
        "image": blogPost.featured.asset.url,
        "author": {
          "@type": "Person",
          "name": blogPost.authorName,
          "image": blogPost.authorImage,
        },
        "datePublished": blogPost.publishedAt,
        "dateModified": blogPost.modifiedAt || blogPost.publishedAt, 
        "description": blogPost.summary,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseURL}/blogg/${blogPost.slug.current}`,
        },
      };

    return (
    <div className="container m-auto pt-14 h-full">
        <Head>
            <title>{blogPost.title + " | Marcus Liljehammar - Webbutvecklare & UX/UI Designer"}</title>
            <link rel="canonical" href={`${baseURL}/blogg/${blogPost.slug.current}`} />
            <meta name="description" content={blogPost.summary} />
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Head>
        <Header />

        <main className={`${styles.blog_single_main} pt-10 w-full px-5 flex items-start justify-start lg:max-w-5xl m-auto lg:pt-10`}>

            <section className={`${styles.post_wrap} w-full px-0 lg:px-20`}>

                <Breadcrumbs separator="/" itemClasses={{separator: "py-2 px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                    <BreadcrumbItem>
                        <Link href="/">Hem</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link href="/blogg">Blogg</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem className="breadc_title">{blogPost.title}</BreadcrumbItem>
                </Breadcrumbs>

                <h1 className={`${styles.post_title} lg:max-w-3xl`}>{blogPost.title}</h1>

                <p className={`${styles.post_datestamp} pt-2 pb-2 lg:pt-4 lg:pb-4`}>{format(new Date(blogPost.publishedAt), 'd MMMM yyy, H:I')}</p>

                {blogPost.featured && blogPost.featured.asset && ( 
                    <Image
                    src={blogPost.featured.asset.url}
                    width={824}
                    height={346}
                    alt={blogPost.featured.alt}
                    className={`${styles.post_feat_image} my-5 w-full`}
                    priority
                />
                )}

                <div className={`${styles.post_summary} py-6`}>
                    <PortableText value={blogPost.summary} />
                </div>
                
                <div className={`${styles.post_content} post_content pt-4`}>
                    <PortableText value={blogPost.body}  />
                </div>

                <div className="tags_wrap">TAGGAR:
                    {blogPost.tags && blogPost.tags.length > 0 ? (
                        blogPost.tags.map((tag, index)=>(
                        <Link key={index} href={`/blogg/taggar/${tag.slug.current}`}>
                            <span className="tag_ ps-1">{tag.title}, </span>
                        </Link>
                        ))
                    ) : (
                        <span className="no_tag_ ps-1">Inga taggar</span>
                    )}
                </div>

                <div className={`${styles.author_box} flex flex-row pt-8 pb-12 items-center`}>
                    <Avatar isBordered color="secondary" src={blogPost.author.imageUrl} size="lg" alt="Author Image" />
                    <div className="ml-6">
                        <p className={styles.written_by}>Skriven av:</p>
                        <p className={styles.author_name}>{blogPost.authorName}</p>
                    </div>
                </div>

            </section>
        </main>
        <Footer />
    </div>
    )
}