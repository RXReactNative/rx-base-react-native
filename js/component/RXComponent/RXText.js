/**
 * @this RXText :
 *
 * author : srxboys
 * @flow
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'

export default class RXText extends Component {
  static propTypes = {
    ...Text.propTypes,
  }

  static defaultProps = {
    ...Text.defaultProps,
  }

  render() {
    const { children, style, allowFontScaling, ...others } = this.props
    return (
      <Text {...others}
        style={[styles.container].concat(style)}
        allowFontScaling={false}
      >
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
})
