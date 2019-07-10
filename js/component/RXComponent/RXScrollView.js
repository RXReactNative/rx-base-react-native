/**
 * @this RXScrollView 
 *
 * author : srxboys
 * @flow  
 */
'use strict';
import React, { Component } from "react";
import { } from 'react-native';

import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

export default class RXScrollView extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    ...KeyboardAwareScrollView.propTypes,
  }

  static defaultProps = {
    ...KeyboardAwareScrollView.defaultProps,
    extraScrollHeight: 40,
    keyboardShouldPersistTaps: 'handled',
  }

  render() {
    let { extraScrollHeight, keyboardShouldPersistTaps, ...others } = this.props;

    if (!extraScrollHeight) {
      extraScrollHeight = 40;
    }

    if (keyboardShouldPersistTaps === 'never') {
      keyboardShouldPersistTaps = 'handled';
    }

    return (
      <KeyboardAwareScrollView {...others}
        extraScrollHeight={extraScrollHeight}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      />
    )
  }
}