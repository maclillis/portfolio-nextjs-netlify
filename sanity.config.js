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
  
  projectId: process.env.SANITY_STUDIO_PROJECT_ID, // Ensure these are set correctly
  dataset: process.env.SANITY_STUDIO_DATASET, // Ensure these are set correctly

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});