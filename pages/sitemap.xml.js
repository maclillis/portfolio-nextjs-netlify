import { groq } from "next-sanity";
import { client } from '../sanity/lib/client';

import getLastModifiedDate from '../utils/getLastModifiedDate'; // Adjust the path according to your project structure

const staticPages = [
    {
      url: '',
      lastmod: getLastModifiedDate('pages/index.js'),  // You can hardcode this or fetch from your VCS like git or use file modified dates
      changefreq: 'monthly',
      priority: '1.0'
    },
    {
      url: 'om',
      lastmod: getLastModifiedDate('pages/om.js'),
      changefreq: 'yearly',
      priority: '0.8'
    },
    {
      url: 'kontakt',
      lastmod: getLastModifiedDate('pages/kontakt.js'),
      changefreq: 'yearly',
      priority: '0.8'
    },
    {
      url: 'jobb',
      lastmod: getLastModifiedDate('pages/jobb.js'),
      changefreq: 'yearly',
      priority: '0.7'
    },
    {
        url: 'blogg',
        lastmod: getLastModifiedDate('pages/blogg.js'),
        changefreq: 'yearly',
        priority: '0.7'
      }
  ];

export async function getServerSideProps({ res }) {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Fetch posts, pages, and media data from Sanity
  const query = groq`{
    "blogPosts": *[_type == "blog"]{
      "url": slug.current,
      "lastmod": _updatedAt,
      "image": featured.asset->url,
      _type
    },
    "workPosts": *[_type == "work"]{
      "url": slug.current,
      "lastmod": _updatedAt,
      "image": featured.asset->url,
      _type,
      "pathPrefix": customPrefix
    },
    "tagPages": *[_type == "tag"]{
        "url": slug.current,
        "lastmod": _updatedAt
    }
  }`;

  const { workPosts, blogPosts, tagPages } = await client.fetch(query);

  // Function to generate a URL entry in the sitemap
  const generateUrlEntry = (url, type, lastmod, changefreq, priority, image, pathPrefix, tagPages = []) => {

    let fullUrl;

    if (type === "blog") {
      fullUrl = `blogg/${url}`;
    } else if (type === "work") {
      fullUrl = `jobb/${url}`;
    } else if (type === "tag") {
        fullUrl = `blogg/taggar/${url}`;
      } else {
        fullUrl = `${url}`;
    }

    const tagsXml = tagPages.length ? `<tags>${tagPages.map(tag => `<tag>${tag}</tag>`).join('')}</tags>` : '';

    return `
            <url>
            <loc>${baseUrl}/${fullUrl}</loc>
            ${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ""}
            ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
            ${priority ? `<priority>${priority}</priority>` : ""}
            ${image ? `
                <image:image>
                <image:loc>${image}</image:loc>
                </image:image>
            ` : ""}
            ${tagsXml}
            </url>
        `
  };

  // Generate the XML sitemap content
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${staticPages.map(page => generateUrlEntry(page.url, 'static', page.lastmod, page.changefreq, page.priority)).join("")}
      ${workPosts.map(workPost => generateUrlEntry(workPost.url, workPost._type, workPost.lastmod, "monthly", "0.7", workPost.image, workPost.pathPrefix)).join("")}
      ${blogPosts.map(blogPost => generateUrlEntry(blogPost.url, blogPost._type, blogPost.lastmod, "weekly", "0.8", blogPost.image, blogPost.tags)).join("")}
      ${tagPages.map(tagPage => generateUrlEntry(tagPage.url, "tag", tagPage.lastmod, "weekly", "0.5")).join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {
      sitemap,
    }
  };
}

export default function Sitemap() {
    return null;
}