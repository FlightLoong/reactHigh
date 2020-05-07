import React from 'react'
// 导入样式
import './index.css'

/**
 * state 的基本使用
 * 
 * ① 状态即数据，指组件内部的私有数据，只能在组件内部使用
 * ② state 的值是对象，表示一个组件中可以有多个数据
 * ③ 获取状态： this.state
 * 
 * state 声明有两个方式
 * 
 * ① 在 constructor 中初始化 state
 * ② 和 render 同级初始化 state
 */

class App extends React.Component {
  // 第一种方式初始化 state 方式
  // constructor() {
  //   super()

  //   this.state = {
  //     info: '无风无月也无你'
  //   }
  // }

  // 第二种初始化 state 方式
  state = {
    info: '无风无月也无你'
  }

  render() {
    return (
      <div>
        <h4>我在等风也等你</h4>
        <div>{this.state.info}</div>
      </div>
    )
  }
}

export default App
