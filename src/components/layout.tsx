import React, { FC, ReactElement } from 'react'

// import { LinkedIn, GitHub, Twitter } from '@material-ui/icons'
// import { Link } from 'gatsby'

// const useStyles = makeStyles({
//   wrapper: {
//     flex: 1,
//     display: 'flex'
//   },
//   spacer: {
//     flex: 1,
//   },
//   button: {
//     padding: '0 0.3rem',
//     margin: '0 0.2rem'
//   },
//   lastButton: {
//     paddingLeft: '0.3rem',
//     marginLeft: '0.2rem'
//   },
//   footerLine: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
export const Layout: FC = ({ children }): ReactElement => {
  // const classes = useStyles()

  return (
    <>
      <div
        className='navbar is-fixed-top is-spaced is-transparent'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <div className='has-text-weight-bold'>Triangular Cube</div>
          </a>
        </div>

        <div className='navbar-end'>
          <a className='navbar-item' href='/blog'>
            Blog
          </a>
        </div>
      </div>
      {children}
      {/*<AppBar position='sticky' color='inherit' elevation={0}>*/}
      {/*  <Toolbar>*/}
      {/*    <ButtonBase component={Link} to='/'>*/}
      {/*      <Typography variant='body1' style={{ fontWeight: 700 }}>*/}
      {/*        <strong>Triangular Cube</strong>*/}
      {/*      </Typography>*/}
      {/*    </ButtonBase>*/}
      {/*    <div className={classes.spacer} />*/}
      {/*    <ButtonBase*/}
      {/*      component={Link}*/}
      {/*      to='/projects'*/}
      {/*      className={classes.button}*/}
      {/*    >*/}
      {/*      <Typography variant='body1'>Projects</Typography>*/}
      {/*    </ButtonBase>*/}
      {/*    <ButtonBase*/}
      {/*      component={Link}*/}
      {/*      to='/blog'*/}
      {/*      className={classes.lastButton}*/}
      {/*    >*/}
      {/*      <Typography variant='body1'>Blog</Typography>*/}
      {/*    </ButtonBase>*/}
      {/*  </Toolbar>*/}
      {/*</AppBar>*/}
      {/*<div className={classes.wrapper}>{children}</div>*/}
      {/*<div className={classes.footerLine}>*/}
      {/*  <IconButton*/}
      {/*    color='inherit'*/}
      {/*    component='a'*/}
      {/*    href='https://www.linkedin.com/in/%F0%9F%92%BE-michael-liu-b0072513a/'*/}
      {/*  >*/}
      {/*    <LinkedIn />*/}
      {/*  </IconButton>*/}
      {/*  <Typography>•</Typography>*/}
      {/*  <IconButton*/}
      {/*    color='inherit'*/}
      {/*    component='a'*/}
      {/*    href='https://github.com/TriangularCube'*/}
      {/*  >*/}
      {/*    <GitHub />*/}
      {/*  </IconButton>*/}
      {/*  <Typography>•</Typography>*/}
      {/*  <IconButton*/}
      {/*    color='inherit'*/}
      {/*    component='a'*/}
      {/*    href='https://twitter.com/TempestUnbound'*/}
      {/*  >*/}
      {/*    <Twitter />*/}
      {/*  </IconButton>*/}
      {/*</div>*/}
      {/*<div className={classes.footerLine}>*/}
      {/*  <Typography variant='body2'>*/}
      {/*    © {new Date().getFullYear()} <strong>Michael Liu</strong>*/}
      {/*  </Typography>*/}
      {/*</div>*/}
    </>
  )
}
