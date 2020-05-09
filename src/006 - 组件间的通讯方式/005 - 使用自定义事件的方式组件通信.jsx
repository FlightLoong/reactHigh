import React from 'react'

// 导入两个子组件
import Son1 from './005 - child1.jsx'
import Son2 from './005 - child2.jsx'

/**
 * 使用自定义事件的方式组件通信
 * 
 * 1、安装包： cnpm install events --save
 * 2、创建公共的实例 event.js
 * 3、在 A 兄弟组件中 使用 emitter.emit 注册一个事件，并传递数据
 * 4、在 B 兄弟组件中，使用 emitter.addListener 监听注册的事件，并接收数据
 */

export default class App extends React.Component {
  
  render () {
    return (
      <div>
        <h4>父组件</h4>
        <hr/>
        <Son1></Son1>
        <hr/>
        <Son2></Son2>
      </div>
    )
  }
}
