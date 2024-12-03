import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Concept = {
    _id: q.string(),
    _createdAt: q.date(),
    _type: q.string(),
    _updatedAt: q.date(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    history: portableTextQuery('history').nullable(),
    variations: portableTextQuery('variations').nullable(),
    usage: portableTextQuery('usage').nullable(),
};

export const conceptsQuery = getAllByTypeQuery({ type: 'concept', input: Concept });

export const specificConceptsQuery = (name: string) => getTypeQuery({ type: 'concept', name, input: Concept });
