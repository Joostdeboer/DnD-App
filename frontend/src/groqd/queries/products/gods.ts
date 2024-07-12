import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';

const God = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    appearance: portableTextQuery('appearance').nullable(),
    teachings: portableTextQuery('teachings').nullable(),
    symbology: portableTextQuery('symbology').nullable(),
    history: portableTextQuery('history').nullable(),
    relations: portableTextQuery('relations').nullable(),
    religion: portableTextQuery('religion').nullable(),
};

export const godsQuery = q('*')
    .filterByType('god')
    .grab$({ ...God });

export const specificGodQuery = (name: string) =>
    q('*')
        .filterByType('god')
        .filter(`defaultAttributes.slug.current == "${name}"`)
        .slice(0)
        .grab$({
            ...God,
        });
