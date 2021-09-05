import { makeStyles } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'

const useStyles = makeStyles({
  center: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export function Center({ children }: PropsWithChildren<any>) {
  const classes = useStyles()

  return <div className={classes.center}>{children}</div>
}
