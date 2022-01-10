import React, { PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet'
import './styles.scss'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export function TopLayout(props: PropsWithChildren<unknown>) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'
          rel='stylesheet'
        />
        <html className='has-navbar-fixed-top' />
      </Helmet>
      {props.children}
    </React.Fragment>
  )
}
