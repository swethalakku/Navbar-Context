// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="home-dark-container">
              <Navbar />
              <div className="home-inner-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home-image"
                />
                <h1 className="home-dark-heading">Home</h1>
              </div>
            </div>
          ) : (
            <div className="home-light-container">
              <Navbar />
              <div className="home-inner-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home-image"
                />
                <h1 className="home-heading">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
