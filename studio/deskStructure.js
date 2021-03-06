import S from '@sanity/desk-tool/structure-builder'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import { GoFlame, GoMilestone, GoMortarBoard, GoMegaphone, GoHome, GoSettings } from "react-icons/go"

// const hiddenTypes = ['companyInfo', 'siteSettings', 'classList']
const hiddenDocTypes = (listItem) =>
  !['companyInfo', 'siteSettings', 'classList', 'membershipBenefits', 'banner', 'testimony'].includes(
    listItem.getId()
  )
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        S.listItem()
        .title('Company Info')
        .icon(GoHome)
        .child(
          S.document()
            .schemaType('companyInfo')
            .documentId('companyInfo1')
        ),
        S.listItem()
          .title('Classes')
          .schemaType('classList')
          .icon(GoMortarBoard)
          .child(
            S.documentTypeList('classList')
          ),
        S.listItem()
          .title('Membership Features')
          .schemaType('membershipBenefits')
          .icon(GoFlame)
          .child(
            S.documentTypeList('membershipBenefits')
          ),
        S.listItem()
          .title('Banner')
          .schemaType('banner')
          .icon(GoMilestone)
          .child(
            S.documentTypeList('banner')
          ),
        S.listItem()
          .title('Testimonies')
          .schemaType('testimony')
          .icon(GoMegaphone)
          .child(
            S.documentTypeList('testimony')
          ),
          orderableDocumentListDeskItem({type: 'classList', title: 'Order Classes for Display', hidden: false}),
            orderableDocumentListDeskItem({type: 'membershipBenefits', title: 'Order Membership Benefits for Display', hidden: false}),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
