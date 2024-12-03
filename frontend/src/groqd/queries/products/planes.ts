import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Plane = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    layers: portableTextQuery('layers').nullable(),
    inhabitants: portableTextQuery('inhabitants').nullable(),
    history: portableTextQuery('history').nullable(),
    cosmography: portableTextQuery('cosmography').nullable(),
    locations: portableTextQuery('locations').nullable(),
};

export const planesQuery = getAllByTypeQuery({ type: 'plane', input: Plane });

export const specificPlaneQuery = (name: string) => getTypeQuery({ type: 'plane', name, input: Plane });
