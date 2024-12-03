import { q } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';
import { defaultAttributes, information } from '@/src/groqd/helper/subqueries';
import { getAllByTypeQuery, getTypeQuery } from '@/src/groqd/queries/products/queries';

const Writing = {
    _type: q.string(),
    defaultAttributes: q('defaultAttributes').grab$(defaultAttributes).nullable(),
    information: q.object(information).optional(),
    description: portableTextQuery('description').nullable(),
    content: portableTextQuery('content').nullable(),
    writingType: q.union([q.literal('myth'), q.literal('story'), q.literal('poem')]).nullable(),
};

export const writingQuery = getAllByTypeQuery({ type: 'writing', input: Writing });
export const storiesQuery = getAllByTypeQuery({ type: 'writing', input: Writing, filter: 'writingType == "story"' });
export const poemsQuery = getAllByTypeQuery({ type: 'writing', input: Writing, filter: 'writingType == "poem"' });
export const mythsQuery = getAllByTypeQuery({ type: 'writing', input: Writing, filter: 'writingType == "myth"' });

export const specificWritingQuery = (name: string) => getTypeQuery({ type: 'writing', name, input: Writing });
export const specificStoryQuery = (name: string) =>
    getTypeQuery({ type: 'writing', input: Writing, name, filter: 'writingType == "story"' });
export const specificPoemQuery = (name: string) =>
    getTypeQuery({ type: 'writing', input: Writing, name, filter: 'writingType == "poem"' });
export const specificMythQuery = (name: string) =>
    getTypeQuery({ type: 'writing', input: Writing, name, filter: 'writingType == "myth"' });
