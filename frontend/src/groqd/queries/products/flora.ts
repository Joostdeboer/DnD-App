import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Flora = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    variants: portableTextQuery('variants').nullable(),
    habitat: portableTextQuery('habitat').nullable(),
    usage: portableTextQuery('usage').nullable(),
    history: portableTextQuery('history').nullable(),
};

export const floraQuery = getAllByTypeQuery({ type: 'flora', input: Flora });

export const specificFloraQuery = (name: string) => getTypeQuery({ type: 'flora', name, input: Flora });
