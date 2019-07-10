/**
 * @this RXString : 
 *
 * author : srxboys
 * @flow  
 */

'use strict'

const RXString = {
  /**
   * @fileoverview  可用的字符串
   * 
   * @param {*} time 
   */
  isString: function(_string) {
    if(!_string || (typeof _string) !== 'string' || _string.length < 1)  {
      return false;
    }
    return true;
  },

  /**
   * 字符串 替换 
   * 
   * @param {*} strObj              源 - 字符串
   * @param {*} pos                 开始位置
   * @param {*} replaceText         将要替换的文本
   * @param {*} originTextLength    源 - 开始位置 的长度 是将要被替换的
   */
  replacePos(strObj, pos, replaceText, originTextLength=0) {
    var str = ''
    if(pos <= 0) {
        var str = replaceText+strObj
    }
    else if(pos < strObj.length-1 ) {
        if(originTextLength<=0) {
          console.warn('error  replacePos=> originTextLength==0');
          return '';
        }
        str = strObj.substr(0, pos-1) + replaceText + strObj.substring(pos+originTextLength, strObj.length);
    }
    else if(pos >= strObj.length-1 ) {
        str = strObj + replaceText;
    }
    return str;
  },
}

export default RXString;
