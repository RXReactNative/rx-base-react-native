/**
 * @this RXDottedLine : 虚线直线
 *
 * author : srxboys
 * @flow  
 */
'use strict'
import React, { Component } from 'react'
import {
  Dimensions,
  ART
} from 'react-native'

import PropTypes from 'prop-types';

var {
  Surface,  // 一个矩形可渲染的区域，是其他元素的容器
  Group,    // 可容纳多个形状、文本和其他的分组
  Shape,    // 形状定义，可填充
  Path,     // 路径
} = ART;

const DeviceWidth = Dimensions.get('window').width;

export default class RXDottedLine extends Component {

  constructor(props) {
    super(props);
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
    strokeDash: [4, 2,] ,
    //[10,5,20,5]

    strokeColor: '#E0E4E5',
  }

  render() {
    let width = this.props.width;
    let height = this.props.height;
    let strokeDash = this.props.strokeDash;
    let strokeColor = this.props.strokeColor;
    let strokeWidth = this.props.strokeWidth;
    let dot_draw_top = (height - strokeWidth)/2

    /*绘制 虚线*/
    let dot_path = Path()
    .moveTo(0, dot_draw_top) // start point: 改变起点为 x,x 。默认为0,0
    .lineTo(width,dot_draw_top) // end point: 目标点

    return(
      <Surface width={width} height={height} style={[{flex:1 ,backgroundColor: 'transparent'},this.props.style]}>
        <Group>
          <Shape d={dot_path} stroke={strokeColor} strokeWidth={strokeWidth} strokeDash={strokeDash}/>
        </Group>
      </Surface>
    )
  }
}