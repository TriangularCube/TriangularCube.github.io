import React, { FC, ReactElement, useState } from 'react'
import '../bulma.scss'

const Layout: FC = ({ children }): ReactElement => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='navbar is-fixed-top'>
        <div className='container'>
          <div className='navbar-brand'>
            <a className='navbar-item'>
              <h2 className='is-size-5 is-family-primary has-text-weight-bold'>
                Triangular Cube
              </h2>
            </a>

            <a
              role='button'
              className={`navbar-burger ${isMenuOpen && `is-active`}`}
              aria-label='menu'
              aria-expanded='false'
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div className={`navbar-menu ${isMenuOpen && `is-active`}`}>
            <div className='navbar-end'>
              <a className='navbar-item' href='/blog'>
                <h4>Blog</h4>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section
        className='container is-flex is-flex-direction-column'
        style={{ minHeight: '100vh', padding: '1rem' }}
      >
        <div className='is-flex is-flex-direction-column' style={{ flex: 1 }}>
          {children}
        </div>
        <div className='columns is-flex-direction-column is-vcentered'>
          <div>Ho</div>
          <div>© 2021 Michael Liu</div>
        </div>
      </section>
    </>
  )
}

export default Layout
