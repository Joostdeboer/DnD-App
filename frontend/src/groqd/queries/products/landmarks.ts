import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Landmark = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    history: portableTextQuery('history').nullable(),
    geography: portableTextQuery('geography').nullable(),
    myths: portableTextQuery('myths').nullable(),
};

export const landmarksQuery = getAllByTypeQuery({ type: 'landmark', input: Landmark });

export const specificLandmarkQuery = (name: string) => getTypeQuery({ type: 'landmark', name, input: Landmark });
