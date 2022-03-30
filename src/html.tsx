import React, { ReactElement } from 'react'

interface HTMLProps {
  headComponents: any
  postBodyComponents: any
  body: any
}

export default function (props: HTMLProps): ReactElement {
  return (
    <html className='has-navbar-fixed-top' lang='en'>
      <head>
        <title>Triangular Cube</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {props.headComponents}
        {/*<link rel='icon' href={favicon} />*/}
      </head>
      <body>
        <div id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
