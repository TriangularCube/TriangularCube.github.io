import React, { FC, ReactElement /*, useState */ } from 'react'
import '../bulma.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const Layout: FC = ({ children }): ReactElement => {
  // const [isMenuOpen, setMenuOpen] = useState(false)

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

            {/* <a
              role='button'
              className={`navbar-burger ${isMenuOpen && `is-active`}`}
              aria-label='menu'
              aria-expanded='false'
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a> */}
          </div>
          {/* <div className={`navbar-menu ${isMenuOpen && `is-active`}`}>
            <div className='navbar-end'>
              <a className='navbar-item' href='/blog'>
                <h4 className='is-size-5'>Blog</h4>
              </a>
            </div>
          </div> */}
        </div>
      </nav>
      <section
        className='container is-flex is-flex-direction-column'
        style={{ minHeight: '100%', padding: '1.5rem' }}
      >
        <div style={{ flex: 1 }}>{children}</div>
        <div className='columns is-flex-direction-column'>
          <div
            className='is-flex is-align-items-center is-justify-content-center'
            style={{ padding: '1rem' }}
          >
            <LinkButton
              icon='fa-github'
              link='https://github.com/TriangularCube'
            />
            •
            <LinkButton
              icon='fa-twitter'
              link='https://twitter.com/TempestUnbound'
            />
            •
            <LinkButton
              icon='fa-linkedin-in'
              link='https://www.linkedin.com/in/%F0%9F%92%BE-michael-liu-b0072513a/'
            />
          </div>
          <div
            className='is-size-5 is-flex is-justify-content-center'
            style={{ whiteSpace: 'pre-wrap' }}
          >
            © {new Date().getFullYear()}  <strong>Michael Liu</strong>
          </div>
        </div>
      </section>
    </>
  )
}

interface LinkButtonProps {
  icon: string
  link: string
}
const LinkButton: FC<LinkButtonProps> = ({
  icon,
  link,
}: LinkButtonProps): ReactElement => {
  return (
    <a className='button is-white' style={{ margin: '0 1rem' }} href={link}>
      <span className='icon'>
        <i className={`fab fa-lg ${icon}`}></i>
      </span>
    </a>
  )
}
