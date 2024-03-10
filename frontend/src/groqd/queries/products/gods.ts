import { q } from 'groqd';

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
