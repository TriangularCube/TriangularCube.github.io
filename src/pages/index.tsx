import React from 'react'
import { Helmet } from 'react-helmet'
import { Center } from '../components/Center'
import '../styles.scss'

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Triangular Cube</title>
      </Helmet>
      <Center>
        <div style={{ flex: 1 }} />

        <h2 className='title is-2'>Michael Liu</h2>
        <p className='is-hidden-mobile subtitle is-4 mt-1 has-text-centered'>Software Developer | Game Maker</p>

        <div className='is-hidden-desktop is-hidden-tablet is-4 mt-1 has-text-centered'>Software Developer</div>
        <div className='is-hidden-desktop is-hidden-tablet is-4 mt-1 has-text-centered'>Game Maker</div>

        <div style={{ flex: 1 }} />
      </Center>
    </>
  )
}

export default IndexPage
