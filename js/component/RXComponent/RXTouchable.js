/**
 * @this RXTouchable
 *
 * author : srxboys
 * @flow
 */
import React, { Component } from 'react'
import {
  Keyboard,
  TouchableOpacity,
} from 'react-native'

let lastClickTime = 0

export default class RXTouchable extends Component {
  constructor(props) {
    super(props)
  }

  onPress = (e) => {
    const { onPress } = this.props
    const now = new Date().getTime()
    if (now - lastClickTime > 500) {
      lastClickTime = now
      Keyboard.dismiss()
      onPress && onPress(e)
    }
  }

  render() {
    const { children, onPress, ...others } = this.props
    return (
      <TouchableOpacity onPress={e => this.onPress(e)} {...others} >
        {children}
      </TouchableOpacity>
    )
  }
}

RXTouchable.propTypes = {
  ...TouchableOpacity.propTypes,
}

RXTouchable.defaultProps = {
  ...TouchableOpacity.defaultProps,
}