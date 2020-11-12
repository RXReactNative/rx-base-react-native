/**
 * @this RXTheme
 *
 * author : srxboys
 * @flow
 *
 * use
 * App.js
  export default class App extends Component {
    constructor(props) {
      super(props)
      ...
      //RXTheme.set(RXThemeDefault) // default Theme  === RXThemeDefault
      RXTheme.set(RXJDThemeDefault) // setting new Theme
    }
    ...
  }
 *
 *
 */
import RXThemeDefault from './RXThemeDefault'

const RXTheme = {
  themes: {
    default: RXThemeDefault,
  },

  set: function (theme) {
    if (theme !== RXThemeDefault) {
      Object.assign(this, RXThemeDefault, theme)
    } else {
      Object.assign(this, theme)
    }
  },
}

RXTheme.set(RXThemeDefault)

module.exports = RXTheme