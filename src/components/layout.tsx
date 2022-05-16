import { Link } from 'gatsby'
import React, { FC, PropsWithChildren, ReactElement, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const Layout: FC = ({ children }: PropsWithChildren<any>): ReactElement => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div
        className='navbar is-fixed-top is-spaced'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <Link
            className='navbar-item'
            to='/'
            onClick={() => setShowMenu(false)}
          >
            <div className='has-text-weight-bold has-text-white'>Triangular Cube</div>
          </Link>

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
            <Link
              className='navbar-item'
              to='/projects'
              onClick={() => setShowMenu(false)}
            >
              Projects
            </Link>
            <Link
              className='navbar-item'
              to='/blog'
              onClick={() => setShowMenu(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
      <div className='is-flex is-flex-direction-column m-6' style={{ flex: 1 }}>
        {children}
      </div>

      <div className='is-flex is-flex-direction-row is-justify-content-center is-align-items-center'>
        <a
          className='is-medium p-4'
          href='https://www.linkedin.com/in/%F0%9F%92%BE-michael-liu-b0072513a/'
        >
          <span className='icon'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </span>
        </a>
        <div>•</div>
        <a
          className='is-medium p-4'
          href='https://github.com/triangularcube'
        >
          <span className='icon'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </span>
        </a>
        <div>•</div>
        <a
          className='is-medium p-4'
          href='https://twitter.com/tempestunbound'
        >
          <span className='icon'>
            <FontAwesomeIcon icon={faTwitter} size='2x' />
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
