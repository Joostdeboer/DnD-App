import { createClient } from '@sanity/client';
import { makeSafeQueryRunner } from 'groqd';
import { SANITY_PROJECT_ID } from '../constants/config';

export const sanityClient = createClient({
    apiVersion: 'v2021-06-07',
    dataset: 'production',
    projectId: SANITY_PROJECT_ID,
});

export const runQuery = makeSafeQueryRunner((query) => sanityClient.fetch(query));
