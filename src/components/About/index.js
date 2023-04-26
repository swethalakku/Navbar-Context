// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="about-dark-container">
              <Navbar />
              <div className="about-inner-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1 className="about-dark-heading">About</h1>
              </div>
            </div>
          ) : (
            <div className="about-light-container">
              <Navbar />
              <div className="about-inner-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1 className="about-heading">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
