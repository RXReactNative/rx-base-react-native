/**
 * @this RXColor
 *
 * author : srxboys
 * @flow  
 */
'use strict'

const RXColor = {
    GRAY          : '#69737b',
    DARK_GRAY     : '#2e353b',
    LIGHT_GRAY    : '#d0d5d9',
    GRAY_BUTTON   : '#483C1D',

    BLUE          : '#0x4e82d7',
    LIGHT_BLUE    : '#cad6f0',
    ORANGE        : '#fc8936',
    RED           : "#d35353",
    DARK_ORANGE   : '#fe7e00',
}
  // 常用的颜色
export default RXColor




// 随机颜色 - 测试时常用
 export var RANDOM_COLOR = function(){
   var rand = Math.floor(Math.random( ) * 0xFFFFFF).toString(16);
   if(rand.length == 6){
       return '#'+rand;
   }else{
       return RANDOM_COLOR();
   }
}
