import { q } from 'groqd';

export const godsQuery = q('*')
    .filter('_type == "god"')
    .grab$({
        name: q.string().optional(),
        title: q.string().optional(),
        domains: q.array(q.string()),
    });
