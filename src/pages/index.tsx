import React from 'react'
// import "../bulma.scss"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div
        className='columns is-centered is-vcentered is-flex-direction-column'
        style={{ flex: 1 }}
      >
        <div className='column is-narrow'>
          <div className='columns is-flex is-flex-direction-column is-vcentered'>
            <p className='is-size-2'>Michael Liu</p>
            <p>Software Developer | Amature Game Maker</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
