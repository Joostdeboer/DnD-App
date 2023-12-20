import { defineConfig } from 'sanity';
import { deskTool, StructureBuilder } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { groqdPlaygroundTool } from 'groqd-playground';
import { schemaTypes } from './schemas';
import deskStructure from './deskStructure';
import { SANITY_PROJECT_ID } from './constants';

export default defineConfig({
    name: 'production',
    title: 'production',
    projectId: SANITY_PROJECT_ID,
    dataset: 'production',
    plugins: [
        deskTool({
            structure: (S: StructureBuilder) => deskStructure(S),
        }),
        visionTool(),
        groqdPlaygroundTool(),
    ],

    schema: {
        types: schemaTypes,
    },
});
