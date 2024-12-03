import { q, sanityImage } from 'groqd';
import { portableTextQuery } from '@/src/groqd/helper/functions';

export const information = {
    basics: q
        .object({
            type: q.string().optional(),
            titles: q.string().optional(),
            symbol: q.string().optional(),
            adjective: q.string().optional(),
            demonym: q.string().optional(),
            variants: q.string().optional(),
            tags: q.string().optional(),
            languages: q.string().optional(),
            occupation: q.string().optional(),
            environment: q.string().optional(),
            diet: q.string().optional(),
            notableStatistics: q.string().optional(),
            usage: q.string().optional(),
        })
        .optional(),
    dates: q
        .object({
            date: q.string().optional(),
            established: q.string().optional(),
            abolished: q.string().optional(),
            born: q.string().optional(),
            died: q.string().optional(),
        })
        .optional(),
    geography: q
        .object({
            location: q.string().optional(),
            region: q.string().optional(),
            plane: q.string().optional(),
            pointsOfInterest: q.string().optional(),
            colorPool: q.string().optional(),
            gravity: q.string().optional(),
            time: q.string().optional(),
            capital: q.string().optional(),
            politicalType: q.string().optional(),
        })
        .optional(),
    commerce: q
        .object({
            imports: q.string().optional(),
            exports: q.string().optional(),
            currency: q.string().optional(),
        })
        .optional(),
    divinity: q
        .object({
            alignment: q.string().optional(),
            provinces: q.string().optional(),
        })
        .optional(),
    history: q
        .object({
            origin: q.string().optional(),
            creator: q.string().optional(),
            outcome: q.string().optional(),
        })
        .optional(),
    relations: q
        .object({
            responsibleParties: q.string().optional(),
            participants: q.string().optional(),
            leadership: q.string().optional(),
            allies: q.string().optional(),
            enemies: q.string().optional(),
            allegiance: q.string().optional(),
            involvedParties: q.string().optional(),
            familyClan: q.string().optional(),
            connections: q.string().optional(),
        })
        .optional(),
    appearance: q
        .object({
            gender: q.string().optional(),
            appearance: q.string().optional(),
            properties: q.string().optional(),
            size: q.string().optional(),
            shape: q.string().optional(),
            traits: q.string().optional(),
            race: q.string().optional(),
            age: q.string().optional(),
            averageLifespan: q.string().optional(),
            distinctions: q.string().optional(),
        })
        .optional(),
    membership: q
        .object({
            members: q.string().optional(),
            inhabitants: q.string().optional(),
            population: q.string().optional(),
            natives: q.string().optional(),
        })
        .optional(),
};

export const defaultAttributes = {
    slug: q
        .object({
            _type: q.string(),
            current: q.string(),
        })
        .optional(),
    name: q.string().optional(),
    shortDescription: portableTextQuery('shortDescription').nullable(),
    altNames: q.array(q.string()).optional(),
    image: sanityImage('image').nullable(),
};
