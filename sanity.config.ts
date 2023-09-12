import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'my-blog',
  title: 'Charles Blog',
  basePath: '/studio',
  projectId: '07u7cf02',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
