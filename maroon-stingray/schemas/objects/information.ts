import { defineType } from 'sanity';

export default defineType({
    name: 'information',
    title: 'Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        {
            name: 'basics',
            title: 'Basics',
            description: "Information on basic information belonging to the item, that don't belong in other sections",
            type: 'basicInformation',
        },
        {
            name: 'dates',
            title: 'Dates',
            description: 'Anything to do with dates, when something is created, born, or gotten rid of',
            type: 'dateInformation',
        },
        {
            name: 'geography',
            title: 'Geography',
            description: 'Info to do with a location, its typing, and notable points of interest',
            type: 'geographicalInformation',
        },
        {
            name: 'commerce',
            title: 'Commerce',
            description: 'A list of imports, exports and potentially currency of a place',
            type: 'commerceInformation',
        },
        {
            name: 'divinity',
            title: 'Divinity',
            description: 'Info on the domains/provinces that something covers, but also the alignment',
            type: 'divineInformation',
        },
        {
            name: 'history',
            title: 'History',
            description:
                'If something is a historical event, it usually has something to describe where it came from, who made it, or what the outcome of the event is',
            type: 'historicalInformation',
        },
        {
            name: 'relations',
            title: 'Relations',
            description: 'Info on relations between parties or locations',
            type: 'relationalInformation',
        },
        {
            name: 'appearance',
            title: 'Appearance',
            description:
                'Info on how someone or something looks, traits they have, and defining features or properties',
            type: 'appearanceInformation',
        },
        {
            name: 'membership',
            title: 'Membership',
            description: 'Used to define who or what inhabits a place, how many, and who were initial settlers',
            type: 'membershipInformation',
        },
    ],
});

export const basicInformation = defineType({
    name: 'basicInformation',
    title: 'Basic Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description:
        'All basic information that can be generically applied to anything or anyone. The first and most generic section you see on an entry',
    fields: [
        {
            name: 'type',
            title: 'Type',
            description:
                'The type of event, monster/racial/floral type, type of landmass/region/location or zone, type of organization, type of object or entity, type of city, and type of creature',
            type: 'string',
        },
        {
            name: 'titles',
            title: 'Titles',
            description: 'Title of a person, location, god or city',
            type: 'string',
        },
        {
            name: 'symbol',
            title: 'Symbol',
            description: 'A mark of emblem depicting the organization, city, person, god, etc.',
            type: 'string',
        },
        {
            name: 'demonym',
            title: 'Demonym',
            description:
                'How to use this person, location or god as an adjective. E.g. Regorian food, Aesic wine, or Tiroan gem',
            type: 'string',
        },
        {
            name: 'variants',
            title: 'Variants',
            description: 'The different variations of a creature, race, object or flora',
            type: 'string',
        },
        {
            name: 'languages',
            title: 'Languages',
            description: 'A list of languages associated with the person, location, or object',
            type: 'string',
        },
        {
            name: 'occupation',
            title: 'Occupation',
            description: 'Job or title of a person',
            type: 'string',
        },
        {
            name: 'environment',
            title: 'Environment',
            description: 'Location where a person or object might be found, or a description of the local biome',
            type: 'string',
        },
        {
            name: 'diet',
            title: 'Diet',
            description:
                'Any special foodstuffs this person or creature consumes, if different from the norm. Can also be applied to specialties for a region or town',
            type: 'string',
        },
        {
            name: 'notableStatistics',
            title: 'Notable Statistics',
            description:
                'Any noteworthy descriptions, such as a weakness to fire or silver, tendency to wear shields or firearms, or in-game stats',
            type: 'string',
        },
        {
            name: 'usage',
            title: 'Usage',
            description:
                "A short description of how an object, plant, rock, etc. might be used in every day life. Detailed descriptions are to be written in the entry's body",
            type: 'string',
        },
    ],
});

export const dateInformation = defineType({
    name: 'dateInformation',
    title: 'Dates Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: "Information on when or where something took place, a person's date of birth or death, etc.",
    fields: [
        {
            name: 'date',
            title: 'Date',
            description: 'In case of a historical event, note when it took place',
            type: 'string',
        },
        {
            name: 'established',
            title: 'Established',
            description: 'A rough date or estimation of when a sect, location, guild, etc. was created',
            type: 'string',
        },
        {
            name: 'abolished',
            title: 'Abolished',
            description:
                'A rough date or estimation of when a sect, location, guild, etc. was destroyed, removed, or abandoned',
            type: 'string',
        },
        {
            name: 'born',
            title: 'Born',
            description:
                'A rough indication of when a person or creature was born. Special circumstances surrounding their birth should be put in the main section',
            type: 'string',
        },
        {
            name: 'died',
            title: 'Died',
            description:
                'A rough indication of when a person or creature died. Special circumstances surrounding their death should be put in the main section',
            type: 'string',
        },
    ],
});

export const geographicalInformation = defineType({
    name: 'geographicalInformation',
    title: 'Geography Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: 'Information on where a person, object, town, etc. can be found, or what pertains to that location',
    fields: [
        {
            name: 'location',
            title: 'Location',
            description:
                'A rough description of where it can be found. E.g. "[The sword] lies in the deepest pools of the Glenlochs", or "[The city] lies in the south-east of Regoria"',
            type: 'string',
        },
        {
            name: 'region',
            title: 'Region',
            description: 'The country, continent, world region, sea, or district the entry can be found at',
            type: 'string',
        },
        {
            name: 'plane',
            title: 'Plane',
            description: 'The plane of existence associated to this entry',
            type: 'string',
        },
        {
            name: 'pointsOfInterest',
            title: 'Points of Interest',
            description:
                'A short list of any notable features of the area, such as "The Grand Bazaar", "Myreed Bastion", etc.',
            type: 'string',
        },
        {
            name: 'colorPool',
            title: 'Color Pool',
            description: 'Indication of color pool by which a plane can be identified when traversing the Astral Plane',
            type: 'string',
        },
        {
            name: 'gravity',
            title: 'Gravity',
            description: 'Any abnormal gravitational features associated to this (demi)plane or location',
            type: 'string',
        },
        {
            name: 'time',
            title: 'Time',
            description: 'How time seems to flow in this dimension, location or plane',
            type: 'string',
        },
        {
            name: 'capital',
            title: 'Capital',
            description: 'The capital of the region or country, if applicable',
            type: 'string',
        },
        {
            name: 'politicalType',
            title: 'Political Type',
            description:
                'How a nation/country, region, or city is governed. E.g. "Mageocracy", "Diarchy", "Religious Council", etc.',
            type: 'string',
        },
    ],
});

export const commerceInformation = defineType({
    name: 'commerceInformation',
    title: 'Commerce Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: 'Information on any commercially relevant details',
    fields: [
        {
            name: 'imports',
            title: 'Imports',
            description: 'Any goods that the city or region imports for usage on local crafts, delicacies, etc.',
            type: 'string',
        },
        {
            name: 'exports',
            title: 'Exports',
            description:
                'Anything important that the city or region exports to other places, or items the place is known for',
            type: 'string',
        },
        {
            name: 'currency',
            title: 'Currency',
            description: 'If a place uses different coin systems, or local names for pieces, note them here',
            type: 'string',
        },
    ],
});

export const divineInformation = defineType({
    name: 'divineInformation',
    title: 'Divinity Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: 'Any information pertaining to the divine nature of the entry',
    fields: [
        {
            name: 'alignment',
            title: 'Alignment',
            description: 'Whether the entity can be considered good, bad, chaotic, orderly, or anything in between',
            type: 'string',
        },
        {
            name: 'provinces',
            title: 'Provinces',
            description:
                'The provinces that a god has under control. E.g. Karos holds the Provinces of Fire, War, and Love',
            type: 'string',
        },
    ],
});

export const historicalInformation = defineType({
    name: 'historicalInformation',
    title: 'History Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: 'Any information on the historical significance of an event or object',
    fields: [
        {
            name: 'origin',
            title: 'Origin',
            description:
                'What started a conflict, what the build up was to the historical event, or what moment in time the object was created',
            type: 'string',
        },
        {
            name: 'creator',
            title: 'Creator',
            description: 'Who made the race, object, location, etc.',
            type: 'string',
        },
        {
            name: 'responsibleParties',
            title: 'Responsible Parties',
            description: 'Which party of people was responsible for instigating the events of this historical event',
            type: 'string',
        },
        {
            name: 'outcome',
            title: 'Outcome',
            description:
                'A short description of what the resulting state was for the world due to this event concluding or object being created',
            type: 'string',
        },
    ],
});

export const relationalInformation = defineType({
    name: 'relationalInformation',
    title: 'Relation Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: 'How a person relates to the event, person, guild, or location',
    fields: [
        {
            name: 'participants',
            title: 'Participants',
            description: 'People that are part of this organization, event, battle, etc.',
            type: 'string',
        },
        {
            name: 'leadership',
            title: 'Leadership',
            description: 'Who is the leading figure of this organization, location, or region',
            type: 'string',
        },
        {
            name: 'allies',
            title: 'Allies',
            description: 'Anyone that can be considered allied to this person, organization or location',
            type: 'string',
        },
        {
            name: 'enemies',
            title: 'Enemies',
            description: 'Anyone that can be considered a foe by this person, organization or location',
            type: 'string',
        },
        {
            name: 'allegiance',
            title: 'Allegiance',
            description: 'Who this person or location swears fealty to, whom they follow (whether deity or other)',
            type: 'string',
        },
        {
            name: 'familyClan',
            title: 'Family/Clan',
            description: 'The name of the clan or family of this person',
            type: 'string',
        },
        {
            name: 'connections',
            title: 'Connections',
            description:
                'Any person or place that cannot be considered an enemy or ally, but is related to this person, organization or location',
            type: 'string',
        },
    ],
});

export const appearanceInformation = defineType({
    name: 'appearanceInformation',
    title: 'Appearance Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: 'Any information on how a person, creature, location, etc. looks',
    fields: [
        {
            name: 'gender',
            title: 'Gender',
            description: 'Male, Female, or other',
            type: 'string',
        },
        {
            name: 'appearance',
            title: 'Appearance',
            description:
                'Brief notes on what the person or location looks like, from eye and hair color alongside common clothing, to the color of the streets and roofs of a city',
            type: 'string',
        },
        {
            name: 'properties',
            title: 'Properties',
            description:
                'Anything special that an object or location might be known for, like a freezing radius around weapons made of Nevermelt Ice',
            type: 'string',
        },
        {
            name: 'size',
            title: 'Size',
            description:
                'How big is this person or location? You can use official sizes (small, medium, large, etc), or reference other measurements',
            type: 'string',
        },
        {
            name: 'shape',
            title: 'Shape',
            description: 'What form a city, region or plane might have',
            type: 'string',
        },
        {
            name: 'traits',
            title: 'Traits',
            description:
                'Any notable feature that you might see on this person or plane, e.g. they always wear gloves, or fire rains from the sky before dusk falls',
            type: 'string',
        },
        {
            name: 'race',
            title: 'Race',
            description: 'The species of the person, entity, or creature',
            type: 'string',
        },
        {
            name: 'age',
            title: 'Age',
            description: 'A rough indication of how old this person or creature is',
            type: 'string',
        },
        {
            name: 'averageLifespan',
            title: '(Average) Lifespan',
            description: 'How old the race or creature might be able to get',
            type: 'string',
        },
        {
            name: 'distinctions',
            title: 'Distinctions',
            description:
                'Any notable features that sets this race, creature or flora apart from others of the same species',
            type: 'string',
        },
    ],
});

export const membershipInformation = defineType({
    name: 'membershipInformation',
    title: 'Membership Information',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    description: 'Information on who or what is part of this organization, region, or location',
    fields: [
        {
            name: 'members',
            title: 'Members',
            description:
                'For example if a guild is all-human, or a city has a variety of species living there predominantly',
            type: 'string',
        },
        {
            name: 'inhabitants',
            title: 'Inhabitants',
            description:
                'Any non-humanoid species living and thriving in this location or region, might also include flora',
            type: 'string',
        },
        {
            name: 'population',
            title: 'Population',
            description: 'An estimation of how many people live in this location',
            type: 'string',
        },
        {
            name: 'natives',
            title: 'Natives',
            description: 'Who the native people are that originate from this location or these lands',
            type: 'string',
        },
    ],
});
