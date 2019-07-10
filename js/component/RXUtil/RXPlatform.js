/**
 * @this RXPlatform : 数字格式化
 *
 * author : srxboys
 * @flow  
 */
'use strict'
import {
  Dimensions,
  Platform,
  PixelRatio
} from 'react-native'

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
// const PAD_WIDTH = 768;
// const PAD_HEIGHT = 1024;


const { height, width} = Dimensions.get('window');
const DeviceWidth = Platform.OS === 'web'? document.documentElement.clientWidth: width;
const DeviceHeight = Platform.OS === 'web'? document.documentElement.clientHeight: height;

const size = {DeviceWidth, DeviceHeight}

const RXPlatform = {

  /** screen.size */
  size,

  /** screen.width */
  width: DeviceWidth,

  /** screen.height */
  height: DeviceHeight,

  // statusHeight=(this.ifIphoneX(44, 20, 20)),
  // navigationHeight=this.ifIphoneX(88, 64, 64),
  navigationHeight: function() {
    return this.ifIphoneX(88, 64, 64)
  },

  adaptationHeight: function(_height) {
    if(this.isIphone) {
      return _height*DeviceWidth/375
    }
    return PixelRatio.getPixelSizeForLayoutSize(_height)
  },

  adaptationWidth: function(_width) {
    if(this.isIphone) {
      return _width*DeviceHeight/667
    }
    return PixelRatio.getPixelSizeForLayoutSize(_width)
  },

  /** iphone */
  isIphone: function() {
    return (
      Platform.OS === 'ios'
    )
  },

  /** iPhoneX */
  isIphoneX: function(){
    if (Platform.OS === 'web') return false; 
 
    return (
      Platform.OS === 'ios' &&
      //Portrait && (ios => PortraitUpsideDown)  人像
      ((DeviceHeight === X_HEIGHT && DeviceWidth === X_WIDTH) || 
      // OrientationLandscapeLeft OrientationLandscapeRight  风景
      (DeviceHeight === X_WIDTH && DeviceWidth === X_HEIGHT)) ||

      ((DeviceHeight === XSMAX_HEIGHT && DeviceWidth === XSMAX_WIDTH) ||
      (DeviceHeight === XSMAX_WIDTH && DeviceWidth === XSMAX_HEIGHT))
    );
  },

  isAndroid: function(){
    return  this.isIphone()?false:true;
  },

  /**
   * components style in any platform
   * @param {*} iphoneXStyle  {}
   * @param {*} iphoneStyle   {}
   * @param {*} androidStyle  {}
   */
  ifIphoneX:function(iphoneXStyle={}, iphoneStyle={}, androidStyle={}) {
    if(this.isIphoneX()) {
      return iphoneXStyle;
    }
    if(this.isIphone()) {
      return iphoneStyle;
    }
    return androidStyle;
  },

  ifIphone:function(iphoneStyle={}, androidStyle={}) {
    return this.ifIphoneX(iphoneStyle, iphoneStyle, androidStyle);
  },

}

export default RXPlatform;


