import React, { FC, ReactElement } from 'react'
import {
  AppBar,
  ButtonBase,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons'
import { Link } from 'gatsby'

const useStyles = makeStyles({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export const Layout: FC = ({ children }): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <AppBar position='sticky' color='inherit' elevation={0}>
        <Toolbar>
          <ButtonBase component={Link} to='/'>
            <Typography variant='body1' style={{ fontWeight: 700 }}>
              <strong>Triangular Cube</strong>
            </Typography>
          </ButtonBase>
        </Toolbar>
      </AppBar>
      <div className={classes.wrapper}>{children}</div>
      <div className={classes.footerLine}>
        <IconButton
          color='inherit'
          component='a'
          href='https://www.linkedin.com/in/%F0%9F%92%BE-michael-liu-b0072513a/'
        >
          <LinkedIn />
        </IconButton>
        <Typography>•</Typography>
        <IconButton
          color='inherit'
          component='a'
          href='https://github.com/TriangularCube'
        >
          <GitHub />
        </IconButton>
        <Typography>•</Typography>
        <IconButton
          color='inherit'
          component='a'
          href='https://twitter.com/TempestUnbound'
        >
          <Twitter />
        </IconButton>
      </div>
      <div className={classes.footerLine}>
        <Typography variant='body2'>
          © {new Date().getFullYear()} <strong>Michael Liu</strong>
        </Typography>
      </div>
    </>
  )
}
