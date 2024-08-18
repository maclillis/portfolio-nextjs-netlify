import { useState, useEffect, useRef } from 'react';
import { client } from '../sanity/lib/client';
const POSTS_PER_PAGE = 3;

async function fetchPosts(query, start = 0, end = POSTS_PER_PAGE) {
    const paginatedQuery = `${query} [${start}...${end}]`;
    const posts = await client.fetch(paginatedQuery);
    return posts;
  }
  
  export function useLazyLoadPosts(initialPosts, total, baseQuery) {
    const [posts, setPosts] = useState(initialPosts);
    const [loading, setLoading] = useState(false);
    const observer = useRef();
  
    const lastPostRef = (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && posts.length < total) {
          loadMorePosts();
        }
      });
      if (node) observer.current.observe(node);
    };
  
    const loadMorePosts = async () => {
      setLoading(true);
      const newPosts = await fetchPosts(baseQuery, posts.length, posts.length + POSTS_PER_PAGE);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
    };
  
    return {
      posts,
      loading,
      lastPostRef,
    };
};