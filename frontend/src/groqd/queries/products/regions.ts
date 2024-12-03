import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Region = {
    _id: q.string(),
    _createdAt: q.date(),
    _type: q.string(),
    _updatedAt: q.date(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    geography: portableTextQuery('geography').nullable(),
    inhabitants: portableTextQuery('inhabitants').nullable(),
    society: portableTextQuery('society').nullable(),
    trade: portableTextQuery('trade').nullable(),
    history: portableTextQuery('history').nullable(),
    notableLocations: portableTextQuery('notableLocations').nullable(),
};

export const regionsQuery = getAllByTypeQuery({ type: 'region', input: Region });

export const specificRegionQuery = (name: string) => getTypeQuery({ type: 'region', name, input: Region });
