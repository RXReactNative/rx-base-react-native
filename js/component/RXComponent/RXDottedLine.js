/**
 * @this RXDottedLine : 虚线
 *
 * author : srxboys
 * @flow
 */
import React, { Component } from 'react'
import {  Dimensions } from 'react-native'

import PropTypes from 'prop-types'

import {
  Surface, // 一个矩形可渲染的区域，是其他元素的容器
  Group, // 可容纳多个形状、文本和其他的分组
  Shape, // 形状定义，可填充
  Path, // 路径
} from '@react-native-community/art'

const DeviceWidth = Dimensions.get('window').width

export default class RXDottedLine extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    ...Surface.propTypes,
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeDash: PropTypes.arrayOf(PropTypes.number),
    strokeColor: PropTypes.string,
  }

  static defaultProps = {
    style: {},
    width: DeviceWidth,
    height: 2,

    strokeWidth: 0.5,
    strokeDash: [4, 2, 0],
    // [10,5,20,5]

    strokeColor: '#E0E4E5',
  }

  render() {
    const width = this.props.width
    const height = this.props.height
    const strokeDash = this.props.strokeDash
    const strokeColor = this.props.strokeColor
    const strokeWidth = this.props.strokeWidth
    const dotDrawTop = (height - strokeWidth) / 2

    /* 绘制 虚线 */
    const dotPath = Path()
    .moveTo(0, dotDrawTop) // start point: 改变起点为 x,x 。默认为0,0
    .lineTo(width, dotDrawTop) // end point: 目标点

    return (
      <Surface width={width} height={height} style={[{ flex: 1, backgroundColor: 'transparent' }, this.props.style]}>
        <Group>
          <Shape d={dotPath} stroke={strokeColor} strokeWidth={strokeWidth} strokeDash={strokeDash} />
        </Group>
      </Surface>
    )
  }
}