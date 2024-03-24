//import sanityClient from '@sanity/client';                                  deprecated
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client'

console.log("projectId:" + process.env.SANITY_PROJECT_ID )

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, 
  dataset: 'production', 
  apiVersion: '2021-11-16',
  useCdn: true, 
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);