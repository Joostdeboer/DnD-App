import 'server-only';
import { createClient, type ClientConfig, type QueryParams } from '@sanity/client';
import { makeSafeQueryRunner } from 'groqd';
import { SANITY_PROJECT_ID } from '@/src/utils/constants/config';

const config: ClientConfig = {
    projectId: SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: 'v2021-06-07',
    useCdn: false,
    token: process.env.SANITY_ACCESS_TOKEN,
};

export const sanityClient = createClient(config);

export async function sanityFetch<QueryResponse>({
    query,
    qParams,
    tags,
}: {
    query: string;
    qParams?: QueryParams;
    tags: string[];
}): Promise<QueryResponse> {
    return sanityClient.fetch<QueryResponse>(query, qParams ?? [], {
        cache: 'force-cache',
        next: { tags },
    });
}

export const runQuery = makeSafeQueryRunner((query: string, tags: string[], qParams?: QueryParams) =>
    sanityFetch({ query, qParams, tags }),
);
