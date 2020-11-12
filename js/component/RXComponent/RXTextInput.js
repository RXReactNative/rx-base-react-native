/**
 * @this RXTextInput
 *
 * author : srxboys
 * @flow
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native'

import PropTypes from 'prop-types'
export default class RXTextInput extends Component {
  static propTypes = {
    ...TextInput.propTypes,
    type: PropTypes.oneOf('text', 'number', 'password'),
  }

  static defaultProps = {
    ...TextInput.defaultProps,
    multiline: false,
    type: 'text',
  }

  constructor(props) {
    super(props)
    const value = this.normalizeValue(props.value || props.defaultValue)
    this.state = {
      value,
      valueSize: this.props.placeholderFontSize,
    }
  }

  componentWillUnmount() {
    this.blur()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { onChange, onChangeText } = this.props
    if (nextProps.value && nextProps.value !== this.props.value) {
      const value = nextProps.value
      this.setState({ value })
      onChange && onChange(this.formatSpace(value))
      onChangeText && onChangeText(this.formatSpace(value))
    }

    let valueSize = nextProps.valueSize
    if (!nextProps.value || nextProps.placeholder === nextProps.value) {
      valueSize = nextProps.placeholderFontSize
    }
    this.setState({ valueSize })
  }

  formatSpace = (value) => {
    const { type } = this.props
    switch (type) {
      case 'number':
        value = value + ''
        return value ? value.replace(/\s+/g, '') : ''
      default:
        return value
    }
  }

  normalizeValue = (value) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value + ''
  }

  onChange = (event) => {
    const { onChange } = this.props
    const value = this.formatSpace(event.nativeEvent.text)

    if (value !== this.state.value) {
      onChange && onChange(value)
      this.setState({ value })
    }
  }

  onChangeText = (text) => {
    const { onChangeText } = this.props
    const value = this.formatSpace(text)
    if (value !== this.state.value) {
      onChangeText && onChangeText(value)
      this.setState({ value })
    }
  }

  _onBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  focus = () => {
    if (this.props.enable) {
      this.refFormInput && this.refFormInput.focus()
    }
  }

  blur = () => {
    this.refFormInput && this.refFormInput.blur()
  }

  clear = () => {
    this.refFormInput && this.refFormInput.clear()
  }

  isFocused = () => {
    this.refFormInput && this.refFormInput.isFocused()
  }

  inputEnable() {
    return this.props.enable && this.props.editable
  }

  render() {
    let { style, type, keyboardType, maxLength, placeholderFontSize, secureTextEntry, placeholder, ...other } = this.props

    if (this.state.valueSize > 0 && Platform.OS === 'web') {
      style = style.concat({ fontSize: this.state.valueSize })
    }

    const enable = this.inputEnable()

    if (type === 'password' || type === 'number') {
      keyboardType = 'numeric'
    }

    const input = <TextInput
      {...other}
      ref={(e) => { this.refFormInput = e }}
      style={[styles.container, style]}
      maxLength={maxLength}
      keyboardType={keyboardType}
      editable={enable}
      placeholder={placeholder}
      value={this.normalizeValue(this.state.value)}
      secureTextEntry={type === 'password' || secureTextEntry}
      multiline={this.props.multiline}
      onChange={this.onChange}
      onChangeText={this.onChangeText}
      allowFontScaling={false}

      onFocus={() => {
        if (this.props.onFocus) {
          this.props.onFocus()
        }
      }}

      onBlur={this._onBlur}

      onLayout={(event) => {
        if (this.props.onLayout) {
          this.props.onLayout(event)
        }
      }}
    />

    let element = input
    if (!(Platform.OS === 'web')) {
      element = React.cloneElement(input, {
        underlineColorAndroid: 'transparent'
      })
    }
    return element
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
})