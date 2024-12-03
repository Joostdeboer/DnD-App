import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Lineage = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    appearance: portableTextQuery('appearance').nullable(),
    abilities: portableTextQuery('abilities').nullable(),
    habitat: portableTextQuery('habitat').nullable(),
    cultures: portableTextQuery('cultures').nullable(),
    society: portableTextQuery('society').nullable(),
    history: portableTextQuery('history').nullable(),
};

export const lineagesQuery = getAllByTypeQuery({ type: 'lineage', input: Lineage });

export const specificLineageQuery = (name: string) => getTypeQuery({ type: 'lineage', name, input: Lineage });
