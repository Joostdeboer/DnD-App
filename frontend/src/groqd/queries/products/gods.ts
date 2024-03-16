import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';

const God = {
    _type: q.string(),
    slug: q
        .object({
            _type: q.string(),
            current: q.string(),
        })
        .optional(),
    name: q.string().optional(),
    title: q.string().optional(),
    domains: q.array(q.string()),
    description: portableTextQuery('description').nullable(),
};

export const godsQuery = q('*')
    .filterByType('god')
    .grab$({ ...God });

export const specificGodQuery = (name: string) =>
    q('*')
        .filterByType('god')
        .filter(`slug.current == "${name}"`)
        .slice(0)
        .grab$({
            ...God,
        });
