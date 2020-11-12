/**
 * rx-base-react-native
 *
 * srxboys
 */
declare module 'rx-base-react-native' {
  import { Component } from 'react'
  import {
    ViewStyle,
    TextProps,
    FlatListProps,
    ARTSurfaceProps,
    TextInputProperties,
    TouchableOpacityProps
  } from 'react-native'

  import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';
  
  interface RXTouchableProps extends TouchableOpacityProps { }
  interface RXButtonProps extends RXTouchableProps {
    // image location
    type?: 'top' | 'bottom' | 'left' | 'right'

    title?: string | number | JSX.Element

    disabledStyle?: ViewStyle

    titleStyle?: TextStyle

    disabledTitleStyle?: TextStyle,

    image?: { uri: string } | number | JSX.Element

    imageStyle?: ImageStyle,

    disabledImageStyle?: ImageStyle,

    space?: number
  }
  
  // Button
  export class RXTouchable extends Component<RXTouchableProps, any> { }
  export class RXButton extends Component<RXButtonProps, any> { }
 
  // DottedLine
  export class RXDottedLine extends Component<ARTSurfaceProps, any> { 
    strokeWidth?: number
    strokeDash?: [number]
    strokeColor?: string
  }

  // ScrollView
  interface RXScrollViewProps extends KeyboardAwareScrollViewProps { }
  export class RXScrollView extends Component<RXScrollViewProps, any> { }
  
  // FlatList
  interface RXFlatListProps<ItemT> extends FlatListProps<ItemI> {
    pageSize?: number
    didMountRefresh?: boolean
    onPullDown: Function // return promise
    onPullUp?: Function // return promise
  }
  export class RXFlatList<ItemT> extends Component<RXFlatListProps<ItemT>, any> { }

  // Text
  export class RXText extends Component<TextProps, any> { }

  // TextInput
  interface RXTextInputProps extends TextInputProperties {
    type: string | 'text'| 'number'| 'password'
  }
  export class RXTextInput extends Component<RXTextInputProps, any> { 
    /**
     * focus() 、 blur() 、 clear()...
     */

    // 
    isFocused: () => boolean
  }
 
  // date: format
  export class RXDate {
    /**
      * Example:
      formatDate(new Date().getTime());                              // 2017-05-12 10:05:44
      formatDate(new Date(12322), 'YY年MM月DD日');                    // 2017年05月12日
      formatDate(new Date().getTime(), '今天是YY/MM/DD hh:mm:ss');    // 今天是2017/05/12 10:07:45
   */
    FormatString: (timeInval: string | number, format: string) => string
    // "星期一 ~ 星期日"
    getWeek: (date: Date) => string
  }

  // string: format
  export class RXString {
    // 是否是 字符串
    isString: (str: string) => boolean

    // 字符串 替换 
    replacePos: (
      str: string, 
      pos: number, 
      replaceText: string, 
      originTextLength: number | 0
    ) => string
  }

  // RXNumber
  export const fsData = {numStr: string, local: number}

  export function RXNumberObj() :fsData
  /**
   * @this  字符串数字 净化(返回样式only 数字和点) 【目前大部分用于去掉逗号】
   *
   * @return  RXNumberObj()
   */
  export function RXNumberStringCleanUp() :fsData

  /**
   * @this 字符串数字  添加逗号 （如果为小数，保留2位）
   * @return string ( 1020.2 ===>  1,020.2 )
   */
  export function RXNumberStringComma(str: string | number) : string

  //2位小数
  export function RXNumberCommentDecimal(str: string | number) : string

  //最少保留一位小数
  export function RXNumberCommentADecimal(str: string | number) : string

  /**
   * @return '12' => '12.00'
   * @return 12 => '12.00'
   */
  export function RXNumberStringDecimal(str: string | number): string

  /**
   * @return '12' => 12.00
   * @return 12 => 12.00
   */
  export function RXNumberDecimal(str: string | number) : number

  export function isNumber(str: string | number) : boolean

  // a <= b
  export function LESS_THAN(a: number, b: number) : boolean

  // a >= b
  export function GREATER_THAN(a: number, b: number) : boolean
}