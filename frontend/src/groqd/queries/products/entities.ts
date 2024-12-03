import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Entity = {
    _id: q.string(),
    _createdAt: q.date(),
    _type: q.string(),
    _updatedAt: q.date(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    usage: portableTextQuery('usage').nullable(),
    appearance: portableTextQuery('appearance').nullable(),
};

export const entitiesQuery = getAllByTypeQuery({ type: 'entity', input: Entity });

export const specificEntityQuery = (name: string) => getTypeQuery({ type: 'entity', name, input: Entity });
