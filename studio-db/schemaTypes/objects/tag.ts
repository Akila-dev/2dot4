// /schemas/category.ts
import {defineType, defineField} from 'sanity'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
