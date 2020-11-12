/**
 * @this RXButton
 *
 * author : srxboys
 * @flow
 */
import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  ViewPropTypes,
} from 'react-native'
import PropTypes from 'prop-types'

import RXText from './RXText'
import RXTheme from '../RXTheme/RXTheme'
import RXTouchable from './RXTouchable'

export default class RXButton extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    ...RXTouchable.propTypes,
    disabledStyle: ViewPropTypes.style,
    type: PropTypes.oneOf(['top', 'bottom', 'left', 'right']), // image position
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    titleStyle: RXText.propTypes.style,
    disabledTitleStyle: RXText.propTypes.style,
    image: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({ uri: PropTypes.string }), PropTypes.number]),
    imageStyle: ViewPropTypes.style,
    disabledImageStyle: ViewPropTypes.style,
    space: PropTypes.number,
  }

  static defaultProps = {
    ...RXTouchable.defaultProps,
    type: 'left',
  }

  render() {
    let {
      style, type, title, titleStyle,
      image, imageStyle, disabled,
      children, space, disabledStyle,
      disabledTitleStyle, disabledImageStyle,
      ...others
    } = this.props

    style = [styles.container].concat(style).concat(disabled ? disabledStyle : {})

    if (!(disabledStyle || disabledTitleStyle || disabledImageStyle)) {
      style.opacity = disabled ? RXTheme.btnDisabledOpacity : style.opacity
    }

    if (!React.isValidElement(title) && title) {
      titleStyle = [styles.title, {
        color: RXTheme.btnTitleColor,
        fontSize: RXTheme.btnFontSize
      }].concat(titleStyle).concat(disabled ? disabledTitleStyle : {})
      title = <RXText style={titleStyle} numberOfLines={1}>{title}</RXText>
    }

    if (!React.isValidElement(image) && image) {
      imageStyle = [styles.image].concat(imageStyle).concat(disabled ? disabledImageStyle : {})
      image = <Image style={imageStyle} source={image} />
    }

    if (space === undefined) {
      space = RXTheme.btnImageTitleSpace
    }

    if (image && title) {
      let direction, width, height
      switch (type) {
        case 'right':
          direction = 'row-reverse'
          width = space
          height = 0
          break
        case 'top':
          direction = 'column'
          width = 0
          height = space
          break
        case 'bottom':
          direction = 'column-reverse'
          width = 0
          height = space
          break
        case 'left':
          direction = 'row'
          width = space
          height = 0
          break
      }
      style = [{ flexDirection: direction }].concat(style)
      children = [
        image,
        <View style={{ width, height }} />,
        title
      ].map((item, index) => {
        return React.cloneElement(item, { key: 'rxbtn_' + index })
      })
    } else if (image) {
      children = image
    } else if (title) {
      children = title
    }

    return (
      <RXTouchable {...others}
        style={style}
        disabled={disabled}
      >
        {children}
      </RXTouchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    overflow: 'hidden',
  },
})
