import { client } from './sanity';

export const fetchSanity = async (query, params = {}) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
};