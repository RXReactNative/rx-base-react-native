/**
 * @this RXTouchable : 
 *
 * author : srxboys
 * @flow 
 */
'use strict';
import React, { Component } from "react";
import {
  Keyboard,
  TouchableOpacity,
} from 'react-native';

let lastClickTime = 0;

export default class RXTouchable extends Component {

  static propTypes = {
    ...TouchableOpacity.propTypes,
  }

  static defaultProps = {
    ...TouchableOpacity.defaultProps,
  }

  onPress = (e) => {
    const { onPress } = this.props;
    let now = new Date().getTime();
    if (now - lastClickTime > 500) {
      lastClickTime = now;
      Keyboard.dismiss();
      onPress && onPress(e);
    }
  }

  render() {
    const { children, onPress, ...others } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}{...others} >
        {children}
      </TouchableOpacity>
    )
  }
}
