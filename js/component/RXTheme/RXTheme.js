/**
 * @this RXTheme : 
 *
 * author : srxboys
 * @flow  
 * 
 * use
 * App.js
  export default class App extends Component {
    constructor(props) {
      super(props);
      ...
      //RXTheme.set(RXThemeDefault); // default Theme  === RXThemeDefault
      RXTheme.set(RXJDThemeDefault); // setting new Theme
    }
    ...
  }
 *
 *
 */
import RXThemeDefault from './RXThemeDefault';

var RXTheme = {
  themes: {
    default: RXThemeDefault,
  },

  set: function (theme) {
    Object.assign(this, theme);
  },
};

RXTheme.set(RXTheme.themes.default);

module.exports = RXTheme;