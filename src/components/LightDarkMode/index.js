// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: false}

  changeMode = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  changeTheme = () => {
    const {isLight} = this.state
    const btnText = isLight ? 'Dark Mode' : 'Light Mode'
    return btnText
  }

  render() {
    const btnText = this.changeTheme()
    let buttontheme
    let themeHeading
    if (btnText === 'Light Mode') {
      buttontheme = 'light-theme'
      themeHeading = 'dark-theme-heading'
    } else {
      buttontheme = 'dark-theme'
      themeHeading = 'light-theme-heading'
    }
    return (
      <div className="bg-container">
        <div className={`${buttontheme} theme-card`}>
          <h1 className={`${themeHeading} heading`}>Click to Change Mode</h1>
          <button className="theme" type="button" onClick={this.changeMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
