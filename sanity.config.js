'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */


import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes'; // Adjust the path as necessary

export default defineConfig({
  name: 'default',
  title: 'Portfolio',
  
  //For Prod
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure these are set correctly
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Ensure these are set correctly

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});