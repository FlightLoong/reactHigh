import React from 'react'

export default class App extends React.Component {

  // constructor 是 React 创建阶段遇到的第一个生命周期
  // 这个生命周期的作用： 初始化数据、为事件处理程序绑定 this
  constructor() {
    super()
    this.state = {}

    console.warn('constructor 首先运行')
  }

  // componentDidMount 是创建阶段执行的第三个生命周期
  // 这个阶段 DOM 已经完成渲染成功
  // 这个生命周期的作用： 获取 DOM 元素、发送网络请求
  componentDidMount() {
    console.warn('componentDidMount 第三个运行')
  }

  // render 是创建阶段执行的第二个生命周期
  // 这个生命周期的作用：渲染 UI 结构
  render() {
    console.warn('render 第二个运行')
    return (
      <div>11</div>
    )
  }
}
