import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure this environment variable is set correctly
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Ensure this environment variable is set correctly
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-01-01', // Use a date string in the format YYYY-MM-DD
  token: process.env.SANITY_API_TOKEN, // use the production token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;