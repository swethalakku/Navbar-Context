// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme(isDarkTheme)
      }

      return (
        <>
          {isDarkTheme ? (
            <div className="navbar-dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="nav-images"
              />
              <ul className="navbar-dark-headings">
                <Link to="/" className="nav-link">
                  <li className="nav-dark-item">Home</li>
                </Link>

                <Link to="/about" className="nav-link">
                  <li className="nav-dark-item">About</li>
                </Link>
              </ul>
              <button
                type="button"
                data-testid="theme"
                onClick={onClickToggleTheme}
                className="toggle-button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="nav-images"
                />
              </button>
            </div>
          ) : (
            <>
              <div className="navbar-light-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="nav-images"
                />
                <ul className="navbar-light-headings">
                  <Link to="/" className="nav-link">
                    <li className="nav-light-item">Home</li>
                  </Link>

                  <Link to="/about" className="nav-link">
                    <li className="nav-light-item">About</li>
                  </Link>
                </ul>
                <button
                  type="button"
                  data-testid="theme"
                  onClick={onClickToggleTheme}
                  className="toggle-button"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="nav-images"
                  />
                </button>
              </div>
              <hr />
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
