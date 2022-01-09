import React, { PropsWithChildren } from 'react'

export function Center({ children }: PropsWithChildren<any>) {
  return (
    <div
      className='is-flex-direction-column is-align-items-center is-justify-content-center'
      style={{ flex: 1, display: 'flex' }}
    >
      {children}
    </div>
  )
}
