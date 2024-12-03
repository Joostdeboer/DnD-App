import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Organization = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    goals: portableTextQuery('goals').nullable(),
    baseOfOperations: portableTextQuery('baseOfOperations').nullable(),
    history: portableTextQuery('history').nullable(),
    activities: portableTextQuery('activities').nullable(),
};

export const organizationsQuery = getAllByTypeQuery({ type: 'organization', input: Organization });

export const specificOrganizationQuery = (name: string) =>
    getTypeQuery({ type: 'organization', name, input: Organization });
