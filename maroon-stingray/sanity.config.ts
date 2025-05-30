import { defineConfig } from 'sanity';
import { structureTool, StructureBuilder } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';

import { schemaTypes } from './schemas';
import deskStructure from './deskStructure';
import { SANITY_PROJECT_ID } from './constants';

export default defineConfig({
    name: 'production',
    title: 'production',
    projectId: SANITY_PROJECT_ID,
    dataset: 'production',
    plugins: [
        structureTool({
            structure: (S: StructureBuilder) => deskStructure(S),
        }),
        media(),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
});
