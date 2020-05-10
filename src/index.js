// import React from 'react'
// import ReactDOM from 'react-dom'

// 导入自己封装的 React 和 React-DOM
import React, { Component } from './001 - 原理分析大全/003 - createElement 方法原理/react.js'
import ReactDOM from './001 - 原理分析大全/003 - createElement 方法原理/react-dom.js'

// 类组件
class ClassCom extends Component{
  render () {
    return (
      <div>
        Tom 和 Jerry 的朋友的宠物： { this.props.name }
      </div>
    )
  }
}

// 函数组件
function Com (props) {
  return (
    <div>
      Tom 和 Jerry 的朋友的宠物： { props.name }
    </div>
  )
}

const jsx = (
  <div className="box">
    <p>我在等风也等你</p>
    <ClassCom name="斯派克"></ClassCom>
    <Com name="泰克"></Com>
  </div>
)

// console.log(jsx)

ReactDOM.render(jsx, document.querySelector('#root'))
