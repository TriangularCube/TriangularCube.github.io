import React from 'react'
import { Helmet } from 'react-helmet'

import { Hidden, Typography } from '@material-ui/core'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Triangular Cube</title>
      </Helmet>
      <Typography variant='h4'>Michael Liu</Typography>
      <br />
      <Hidden implementation='css' smDown>
        <Typography variant='h6' align='center'>
          Software Developer | Amateur Game Maker
        </Typography>
      </Hidden>
      <Hidden implementation='css' mdUp>
        <Typography variant='body1' align='center'>
          Software Developer
        </Typography>
        <Typography align='center'>
          -
        </Typography>
        <Typography variant='body1' align='center'>
          Amateur Game Maker
        </Typography>
      </Hidden>
    </>
  )
}

export default IndexPage
