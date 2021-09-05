import React from 'react'
import { Helmet } from 'react-helmet'

import { Hidden, NoSsr, Typography } from '@material-ui/core'
import { Center } from '../components/Center'

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Triangular Cube</title>
      </Helmet>
      <NoSsr>
        <Center>
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
            <Typography align='center'>-</Typography>
            <Typography variant='body1' align='center'>
              Amateur Game Maker
            </Typography>
          </Hidden>
        </Center>
      </NoSsr>
    </>
  )
}

export default IndexPage
