import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import {myTheme} from './theme'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Jeff Builds Tech CMS',

  projectId: 'ch8y490c',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    // @ts-ignore
    types: schemaTypes,
  },
  theme: myTheme,
})
