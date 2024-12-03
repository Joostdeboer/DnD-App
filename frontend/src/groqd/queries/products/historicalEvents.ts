import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const HistoricalEvent = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    events: portableTextQuery('events').nullable(),
    consequences: portableTextQuery('consequences').nullable(),
    etymology: portableTextQuery('etymology').nullable(),
};

export const historicalEventsQuery = getAllByTypeQuery({ type: 'historicalEvent', input: HistoricalEvent });

export const specificHistoricalEventQuery = (name: string) =>
    getTypeQuery({ type: 'historicalEvent', name, input: HistoricalEvent });
