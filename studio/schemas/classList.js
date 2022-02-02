export default {
  name: 'classList',
  title: 'Classes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image of Class',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortDescription',
      title: 'Short Class Description',
      type: 'string',
    },
    {
      name: 'fullDescription',
      title: 'Class Description',
      type: 'blockContent',
    },
  ],
}
