import React from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Center } from '../components/Center'

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Triangular Cube</title>
      </Helmet>
      <Center>
        <div className='is-size-1'>Michael Liu</div>
        <div>
          <a className='button is-white'>
            <span className='icon'>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        </div>
      </Center>
      {/*<Center>*/}
      {/*<Typography variant='h4'>Michael Liu</Typography>*/}
      {/*<br />*/}
      {/*<Hidden implementation='css' smDown>*/}
      {/*  <Typography variant='h6' align='center'>*/}
      {/*    Software Developer | Amateur Game Maker*/}
      {/*  </Typography>*/}
      {/*</Hidden>*/}
      {/*<Hidden implementation='css' mdUp>*/}
      {/*  <Typography variant='body1' align='center'>*/}
      {/*    Software Developer*/}
      {/*  </Typography>*/}
      {/*  <Typography align='center'>-</Typography>*/}
      {/*  <Typography variant='body1' align='center'>*/}
      {/*    Amateur Game Maker*/}
      {/*  </Typography>*/}
      {/*</Hidden>*/}
      {/*</Center>*/}
    </>
  )
}

export default IndexPage
