import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const God = {
    _id: q.string(),
    _createdAt: q.date(),
    _type: q.string(),
    _updatedAt: q.date(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    appearance: portableTextQuery('appearance').nullable(),
    teachings: portableTextQuery('teachings').nullable(),
    symbology: portableTextQuery('symbology').nullable(),
    history: portableTextQuery('history').nullable(),
    relations: portableTextQuery('relations').nullable(),
    religion: portableTextQuery('religion').nullable(),
};

export const godsQuery = getAllByTypeQuery({ type: 'god', input: God });

export const specificGodQuery = (name: string) => getTypeQuery({ type: 'god', name, input: God });
