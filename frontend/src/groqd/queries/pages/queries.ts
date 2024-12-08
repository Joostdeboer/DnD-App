import { q } from 'groqd';
import { information } from '@/src/groqd/helper/subqueries';

export const documentSettings = {
    information: q.object(information).optional(),
    informationCategories: q
        .object({
            basics: q.string().optional(),
            dates: q.string().optional(),
            geography: q.string().optional(),
            commerce: q.string().optional(),
            divinity: q.string().optional(),
            history: q.string().optional(),
            relations: q.string().optional(),
            appearance: q.string().optional(),
            membership: q.string().optional(),
        })
        .optional(),
};

export const documentSettingsQuery = () => q('*').filterByType('documentSettings').grab$(documentSettings).slice(0);
