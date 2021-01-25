import "../bulma.scss"
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <section className='hero'>
        <div className='hero-body'>
          <div className="container">
            <h1>Title</h1>
          </div>
        </div>
      </section>
      {children}
    </>
  )
}

export default Layout
