export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Banner Primary Text',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'copy',
      title: 'Include more copy under title',
      type: 'text',
    },
  ],
}
