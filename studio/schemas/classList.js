import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  name: 'classList',
  title: 'Classes',
  type: 'document',
  orderings: [orderRankOrdering],

  fields: [
    orderRankField({ type: 'title' }),
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
      name: 'overview',
      title: 'Class Overview',
      type: 'text',
    },
    {
      name: 'fullDescription',
      title: 'Class Description',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: '_updatedAt'
    },
    prepare(selection) {
      const {title, date} = selection
      return {
        title: title,
        subtitle: date
      }
    }
  }
}
