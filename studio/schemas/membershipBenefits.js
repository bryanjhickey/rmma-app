import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  name: 'membershipBenefits',
  title: 'Membership Benefits',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'title' }),
    {
      name: 'title',
      title: 'Benefit Title',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Description of Benefit',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle
      }
    }
  }
}
