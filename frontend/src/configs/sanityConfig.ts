import { createClient } from '@sanity/client';
import { makeSafeQueryRunner } from 'groqd';
import { SANITY_PROJECT_ID } from '@/src/utils/constants/config';

export const sanityClient = createClient({
    apiVersion: 'v2021-06-07',
    dataset: 'production',
    projectId: SANITY_PROJECT_ID,
    useCdn: true,
});

export const runQuery = makeSafeQueryRunner((query) => sanityClient.fetch(query, { cache: 'no-store' }));
