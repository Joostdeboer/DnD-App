import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const City = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    society: portableTextQuery('society').nullable(),
    government: portableTextQuery('government').nullable(),
    districts: portableTextQuery('districts').nullable(),
    history: portableTextQuery('history').nullable(),
    organizations: portableTextQuery('organizations').nullable(),
};

export const citiesQuery = getAllByTypeQuery({ type: 'city', input: City });

export const specificCityQuery = (name: string) => getTypeQuery({ type: 'city', name, input: City });
