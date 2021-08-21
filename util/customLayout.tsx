import React, { ReactElement } from 'react'
import { Layout } from '../src/components/layout'

export const CustomLayout = ({
  element,
  props,
}: {
  element: ReactElement
  props: any
}) => {
  return <Layout {...props}>{element}</Layout>
}
