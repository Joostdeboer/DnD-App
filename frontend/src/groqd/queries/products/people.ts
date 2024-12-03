import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Person = {
    _id: q.string(),
    _createdAt: q.date(),
    _type: q.string(),
    _updatedAt: q.date(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    appearance: portableTextQuery('appearance').nullable(),
    history: portableTextQuery('history').nullable(),
    relationships: portableTextQuery('relationships').nullable(),
    personality: portableTextQuery('personality').nullable(),
    abilities: portableTextQuery('abilities').nullable(),
};

export const peopleQuery = getAllByTypeQuery({ type: 'person', input: Person });

export const specificPersonQuery = (name: string) => getTypeQuery({ type: 'person', name, input: Person });
