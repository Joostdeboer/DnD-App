import { ApolloClient, InMemoryCache } from '@apollo/client';

export const SANITY_PROJECT_ID = 'g21vpug0';

export const client = new ApolloClient({
    uri: `https://${SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/production/default`,
    cache: new InMemoryCache(),
});
