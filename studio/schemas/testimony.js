export default {
  name: 'testimony',
  title: 'Testimonies',
  type: 'document',
  fields: [
    {
      name: 'person',
      title: 'Name of Person',
      description: "Who is giving this testimony?",
      type: 'string',
    },
    {
      name: 'personRole',
      title: 'Whats their role',
      description: "Tell us what they train or their rank?",
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Person',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testimony',
      title: 'Testimony',
      description: "What did they say?",
      type: 'text',
    },
  ],
}
