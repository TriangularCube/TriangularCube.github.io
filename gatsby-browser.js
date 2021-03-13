import React from 'react'
import { Layout } from './src/components/layout'

import './src/global.css'

export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: 'has-navbar-fixed-top',
  })
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
