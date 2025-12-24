import 'server-only';
import { createClient, type ClientConfig } from '@sanity/client';
import { SANITY_DATASET, SANITY_PROJECT_ID } from '@/src/utils/constants/config';
import { defineLive } from 'next-sanity/live';

const config: ClientConfig = {
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: 'v2021-06-07',
    useCdn: true,
};

export const sanityClient = createClient(config);

export const { sanityFetch, SanityLive } = defineLive({
    client: sanityClient,
    serverToken: process.env.SANITY_API_READ_TOKEN,
    browserToken: process.env.SANITY_API_READ_TOKEN,
});
