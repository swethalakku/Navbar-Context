// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <>
              <Navbar />
              <div className="not-found-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className="not-found-dark-heading">Lost Your Way</h1>
                <p className="not-found-dark-description">
                  We cannot seem to find the page
                </p>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="not-found-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className="not-found-light-heading">Lost Your Way</h1>
                <p className="not-found-light-description">
                  We cannot seem to find the page
                </p>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
