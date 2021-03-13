import React from 'react'
import { Helmet } from 'react-helmet'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Triangular Cube</title>
      </Helmet>
      <div className='level'>
        <p className='level-item is-size-2 has-text-weight-bold'>Michael Liu</p>
      </div>
      <div className='level is-flex is-justify-content-center'>
        <p className='level-item is-size-3'>
          Software Developer | Amateur Game Maker
        </p>
      </div>
      {/*<div*/}
      {/*  className='columns is-centered is-vcentered is-flex-direction-column'*/}
      {/*  style={{ flex: 1 }}*/}
      {/*>*/}
      {/*  <div className='column is-narrow'>*/}
      {/*    <div className='columns is-flex is-flex-direction-column is-vcentered'>*/}
      {/*      */}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}

export default IndexPage
