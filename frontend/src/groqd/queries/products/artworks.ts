import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Artwork = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
};

export const artworkQuery = getAllByTypeQuery({ type: 'artwork', input: Artwork });

export const specificArtQuery = (name: string) => getTypeQuery({ type: 'artwork', name, input: Artwork });
