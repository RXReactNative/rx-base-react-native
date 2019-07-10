/**
 * @this RXFlatList : 
 *
 * author : srxboys
 * @flow  
 */
'use strict';
import React, { Component } from "react";
import {
  FlatList,
  RefreshControl
} from 'react-native';

import PropTypes from 'prop-types';

export default class RXFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      refreshing: false,
      noMoreData: false,
    }
  }

  static propTypes = {
    ...FlatList.propTypes,
    pageSize: PropTypes.number,
    didMountRefresh: PropTypes.bool,
    onPullDown: PropTypes.func, //return promise
    onPullUp: PropTypes.func,   //return promise,then（return [noMore data] / [data]: 返回是否没有更多数据）
  }

  static defaultProps = {
    ...FlatList.defaultProps,
    didMountRefresh: true,
    pageSize: 10,
  }

  _pullDownRefresh = () => {
    if (!this.props.onPullDown) return;
    if (!this.state.refreshing) {
      this.setState({
        pageNo: 1,
        refreshing: true,
      }, this.props.onPullDown(this.state.pageNo, this.props.pageSize)
        .then((e) => {
          this.setState({
            refreshing: false,
            noMoreData: false,
          })
        })
        .catch((e) => {
          this.setState({
            refreshing: false,
            noMoreData: false,
          })
        }))
    } else {
      this.setState({
        refreshing: false,
      })
    }
  }

  _pullUpRefresh = () => {
    if (!this.props.onPullUp) return
    if (!this.state.refreshing && !this.state.noMoreData) {
      const pageNo = this.state.pageNo + 1;
      this.setState({
        pageNo: pageNo,
        refreshing: true,
      }, this.props.onPullUp(this.state.pageNo, this.props.pageSize)
        .then((noMoreData) => {
          this.setState({
            noMoreData: noMoreData,
            refreshing: false,
          })
        }).catch((e) => {
          this.setState({
            refreshing: false,
            noMoreData: false,
          })
        }))
    } else {
      this.setState({
        refreshing: false,
      })
    }
  }

  render() {
    let { refreshControl, ...others } = this.props;

    if (!refreshControl) {
      refreshControl = <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this._pullDownRefresh} />
    }

    return (
      <FlatList  {...others}
        refreshControl={refreshControl}
      />
    )
  }
}
