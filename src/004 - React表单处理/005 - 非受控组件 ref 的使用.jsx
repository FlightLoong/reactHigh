import React from 'react'

/**
 * 非受控组件
 * 
 * 所谓的 非受控组件 就是指： 值没有被 React 进行管理的表单元素
 * 
 * 非受控组件需要借助于 ref，使用原生 DOM 方式来获取表单元素值
 * 
 * 这是 ref 的主要作用：获取 DOM 或组件
 */

export default class App extends React.Component {

  constructor () {
    super ()

    this.state = {
      value: '111'
    }

    // 1. 调用 React.createRef() 方法创建一个 ref 对象
    this.inputRef = React.createRef()
  }

  getInput = () => {
    // 3. 通过 ref 对象获取到文本框的值
    console.log(this.inputRef.current.value)
  }

  render () {
    return (
      <div>
        {/* 2. 将创建好的 ref 对象 通过 ref 属性添加到文本框中 */}
        <input type="text" value={ this.state.value } ref={ this.inputRef } />

        <button onClick={ this.getInput }>获取input信息</button>
      </div>
    )
  }
}
