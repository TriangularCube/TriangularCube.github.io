import React, { FC, ReactElement, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const Layout: FC = ({ children }): ReactElement => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div
        className='navbar is-fixed-top is-spaced'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <div className='has-text-weight-bold'>Triangular Cube</div>
          </a>

          <a
            role='button'
            className={`navbar-burger ${showMenu && 'is-active'}`}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => setShowMenu(!showMenu)}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div className={`navbar-menu ${showMenu && 'is-active'}`}>
          <div className='navbar-end'>
            <a className='navbar-item' href='/projects'>
              Projects
            </a>
            <a className='navbar-item' href='/blog'>
              Blog
            </a>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>{children}</div>

      <div className='is-flex is-flex-direction-row is-justify-content-center is-align-items-center'>
        <a
          className='button is-medium is-white'
          href='https://www.linkedin.com/in/%F0%9F%92%BE-michael-liu-b0072513a/'
        >
          <span className='icon'>
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </a>
        <div>•</div>
        <a
          className='button is-medium is-white'
          href='https://github.com/triangularcube'
        >
          <span className='icon'>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
        <div>•</div>
        <a
          className='button is-medium is-white'
          href='https://twitter.com/tempestunbound'
        >
          <span className='icon'>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>
      </div>
      <div className='is-flex is-flex-direction-row is-justify-content-center mb-2'>
        <p className='is-text'>
          © {new Date().getFullYear()} <strong>Michael Liu</strong>
        </p>
      </div>
    </>
  )
}
