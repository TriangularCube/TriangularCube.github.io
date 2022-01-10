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

        <h2 className='title is-2 has-text-dark'>Michael Liu</h2>
        <p className='subtitle is-4 mt-1'>Software Developer | Game Maker</p>

        <div style={{ flex: 1 }} />
      </Center>
    </>
  )
}

export default IndexPage
