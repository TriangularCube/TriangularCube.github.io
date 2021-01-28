import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Triangular Cube</title>
      </Helmet>
      <Layout>
        <div
          className='columns is-centered is-vcentered is-flex-direction-column'
          style={{ flex: 1 }}
        >
          <div className='column is-narrow'>
            <div className='columns is-flex is-flex-direction-column is-vcentered'>
              <p className='is-size-2 has-text-weight-bold'>Michael Liu</p>
              <p className='is-size-3'>Software Developer | Amateur Game Maker</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
