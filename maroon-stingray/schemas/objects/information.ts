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
            type: 'basicInformation',
        },
        {
            name: 'dates',
            title: 'Dates',
            type: 'dateInformation',
        },
        {
            name: 'geography',
            title: 'Geography',
            type: 'geographicalInformation',
        },
        {
            name: 'commerce',
            title: 'Commerce',
            type: 'commerceInformation',
        },
        {
            name: 'divinity',
            title: 'Divinity',
            type: 'divineInformation',
        },
        {
            name: 'history',
            title: 'History',
            type: 'historicalInformation',
        },
        {
            name: 'relations',
            title: 'Relations',
            type: 'relationalInformation',
        },
        {
            name: 'appearance',
            title: 'Appearance',
            type: 'appearanceInformation',
        },
        {
            name: 'membership',
            title: 'Membership',
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
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
        },
        {
            name: 'titles',
            title: 'Titles',
            type: 'string',
        },
        {
            name: 'symbol',
            title: 'Symbol',
            type: 'string',
        },
        {
            name: 'adjective',
            title: 'Adjective',
            type: 'string',
        },
        {
            name: 'demonym',
            title: 'Demonym',
            type: 'string',
        },
        {
            name: 'variants',
            title: 'Variants',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'string',
        },
        {
            name: 'languages',
            title: 'Languages',
            type: 'string',
        },
        {
            name: 'occupation',
            title: 'Occupation',
            type: 'string',
        },
        {
            name: 'environment',
            title: 'Environment',
            type: 'string',
        },
        {
            name: 'diet',
            title: 'Diet',
            type: 'string',
        },
        {
            name: 'notableStatistics',
            title: 'Notable Statistics',
            type: 'string',
        },
        {
            name: 'usage',
            title: 'Usage',
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
    fields: [
        {
            name: 'date',
            title: 'Date',
            type: 'string',
        },
        {
            name: 'established',
            title: 'Established',
            type: 'string',
        },
        {
            name: 'abolished',
            title: 'Abolished',
            type: 'string',
        },
        {
            name: 'born',
            title: 'Born',
            type: 'string',
        },
        {
            name: 'died',
            title: 'Died',
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
    fields: [
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'region',
            title: 'Region',
            type: 'string',
        },
        {
            name: 'plane',
            title: 'Plane',
            type: 'string',
        },
        {
            name: 'pointsOfInterest',
            title: 'Points of Interest',
            type: 'string',
        },
        {
            name: 'colorPool',
            title: 'Color Pool',
            type: 'string',
        },
        {
            name: 'gravity',
            title: 'Gravity',
            type: 'string',
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
        },
        {
            name: 'capital',
            title: 'Capital',
            type: 'string',
        },
        {
            name: 'politicalType',
            title: 'Political Type',
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
    fields: [
        {
            name: 'imports',
            title: 'Imports',
            type: 'string',
        },
        {
            name: 'exports',
            title: 'Exports',
            type: 'string',
        },
        {
            name: 'currency',
            title: 'Currency',
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
    fields: [
        {
            name: 'alignment',
            title: 'Alignment',
            type: 'string',
        },
        {
            name: 'provinces',
            title: 'Provinces',
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
    fields: [
        {
            name: 'origin',
            title: 'Origin',
            type: 'string',
        },
        {
            name: 'creator',
            title: 'Creator',
            type: 'string',
        },
        {
            name: 'outcome',
            title: 'Outcome',
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
    fields: [
        {
            name: 'responsibleParties',
            title: 'Responsible Parties',
            type: 'string',
        },
        {
            name: 'participants',
            title: 'Participants',
            type: 'string',
        },
        {
            name: 'leadership',
            title: 'Leadership',
            type: 'string',
        },
        {
            name: 'allies',
            title: 'Allies',
            type: 'string',
        },
        {
            name: 'enemies',
            title: 'Enemies',
            type: 'string',
        },
        {
            name: 'allegiance',
            title: 'Allegiance',
            type: 'string',
        },
        {
            name: 'involvedParties',
            title: 'Involved Parties',
            type: 'string',
        },
        {
            name: 'familyClan',
            title: 'Family/Clan',
            type: 'string',
        },
        {
            name: 'connections',
            title: 'Connections',
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
    fields: [
        {
            name: 'gender',
            title: 'Gender',
            type: 'string',
        },
        {
            name: 'appearance',
            title: 'Appearance',
            type: 'string',
        },
        {
            name: 'properties',
            title: 'Properties',
            type: 'string',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
        },
        {
            name: 'shape',
            title: 'Shape',
            type: 'string',
        },
        {
            name: 'traits',
            title: 'Traits',
            type: 'string',
        },
        {
            name: 'race',
            title: 'Race',
            type: 'string',
        },
        {
            name: 'age',
            title: 'Age',
            type: 'string',
        },
        {
            name: 'averageLifespan',
            title: '(Average) Lifespan',
            type: 'string',
        },
        {
            name: 'distinctions',
            title: 'Distinctions',
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
    fields: [
        {
            name: 'members',
            title: 'Members',
            type: 'string',
        },
        {
            name: 'inhabitants',
            title: 'Inhabitants',
            type: 'string',
        },
        {
            name: 'population',
            title: 'Population',
            type: 'string',
        },
        {
            name: 'natives',
            title: 'Natives',
            type: 'string',
        },
    ],
});
