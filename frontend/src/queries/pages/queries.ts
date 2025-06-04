import { defineQuery } from 'next-sanity';

export const documentSettings = defineQuery(
    `*[ _type == 'documentSettings' ][0]{ information, informationCategories }`,
);
