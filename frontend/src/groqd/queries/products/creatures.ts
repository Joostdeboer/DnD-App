import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Creature = {
    _id: q.string(),
    _createdAt: q.date(),
    _type: q.string(),
    _updatedAt: q.date(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    behavior: portableTextQuery('behavior').nullable(),
    abilities: portableTextQuery('abilities').nullable(),
    ecology: portableTextQuery('ecology').nullable(),
    biology: portableTextQuery('biology').nullable(),
    combat: portableTextQuery('combat').nullable(),
    subspecies: portableTextQuery('subspecies').nullable(),
    history: portableTextQuery('history').nullable(),
    society: portableTextQuery('society').nullable(),
    usage: portableTextQuery('usage').nullable(),
};

export const creaturesQuery = getAllByTypeQuery({ type: 'creature', input: Creature });

export const specificCreatureQuery = (name: string) => getTypeQuery({ type: 'creature', name, input: Creature });
