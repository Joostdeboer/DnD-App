import { q } from 'groqd';

export const godsQuery = q('*').filter().grab$({
    name: q.string(),
});
