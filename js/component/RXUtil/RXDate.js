/**
 * @this RXDate : 
 *
 * author : srxboys
 * @flow  
 */

'use strict'

const RXDate = {
  /**
   * @fileoverview  date format : 时间格式化
   * 
   * @param {*} time 
   * @param {*} format 
   * 
   * Example:
    formatDate(new Date().getTime());                             //2017-05-12 10:05:44
    formatDate(new Date(12322),'YY年MM月DD日');                    //2017年05月12日
    formatDate(new Date().getTime(),'今天是YY/MM/DD hh:mm:ss');    //今天是2017/05/12 10:07:45
   */
  FormatString: function(time,format='YY-MM-DD hh:mm:ss'){
    var date = new Date(time);
    
    var year = date.getFullYear(),
        month = date.getMonth()+1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
        return '0'+index;
    });////开个长度为10的数组 格式为 00 01 02 03

    var newTime = format.replace(/YY/g,year)
                        .replace(/MM/g,preArr[month]||month)
                        .replace(/DD/g,preArr[day]||day)
                        .replace(/hh/g,preArr[hour]||hour)
                        .replace(/mm/g,preArr[min]||min)
                        .replace(/ss/g,preArr[sec]||sec);

    return newTime;
  },

  getWeek: function(date) {
    if(! (date instanceof Date)) {
      if (parseFloat(date).toString() == "NaN") {
        console.warn('RXDate.js => getWeek() => date='+date)
        return ''
      }
      let num = parseInt(date)
      date = new Date(num);
    }
    var week;
    if(date.getDay() == 0) week = "星期日"
    if(date.getDay() == 1) week = "星期一"
    if(date.getDay() == 2) week = "星期二"
    if(date.getDay() == 3) week = "星期三"
    if(date.getDay() == 4) week = "星期四"
    if(date.getDay() == 5) week = "星期五"
    if(date.getDay() == 6) week = "星期六"
    return week;
  }


}

export default RXDate;


