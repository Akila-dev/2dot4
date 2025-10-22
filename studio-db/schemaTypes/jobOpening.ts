import {defineType, defineField} from 'sanity'

export const jobOpening = defineType({
  name: 'job',
  title: 'Job Opening',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'reference',
      to: [{type: 'jobDepartment'}],
      description: 'Select the department this role belongs to, e.g Engineering, Marketing, etc.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'full-time'},
          {title: 'Part-time', value: 'part-time'},
          {title: 'Hybrid', value: 'hybrid'},
          {title: 'Contract', value: 'contract'},
          {title: 'Internship', value: 'internship'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Example: Dubai, UAE or Remote (UAE-based)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'salaryRange',
      title: 'Salary Range',
      type: 'string',
      description: 'Example: AED 15,000 - AED 25,000 per month',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
      description: 'External link to apply for the job',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      department: 'department.name',
      location: 'location',
    },
    prepare({title, department, location}) {
      return {
        title,
        subtitle: `${department ? `${department} • ` : ''}${location || ''}`,
      }
    },
  },
})
