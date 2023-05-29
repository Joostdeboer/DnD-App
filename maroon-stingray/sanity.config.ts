import {defineConfig} from 'sanity'
import {deskTool, StructureBuilder} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from "./deskStructure";

export default defineConfig({
  name: 'production',
  title: 'production',

  projectId: 'g21vpug0',
  dataset: 'production',

  plugins: [
      deskTool({
    structure: (S: StructureBuilder) => deskStructure(S),
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
