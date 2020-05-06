import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 嵌入 jsx 表达式
 * ① 语法：{ JavaScript 表达式 }
 * ② 注意：语法是单引号，不是双大括号
 * ③ 语法中嵌套的任意的 JavaScript 表达式
 * ④ jsx 自身也是 JS 表达式
 * ⑤ 注意：单引号中不能是 js 语句，也不能是对象
 */

const box = (
  <div>
    <p>{1 + 1}</p>
    <p>{5 > 3 ? '大于' : '小于'}</p>
    <p>{true + 1}</p>
    <p>{1 || 3}</p>
    <p>{2 && 5}</p>
    <p>{<span>jsx语法嵌套</span>}</p>
    {/* 不能嵌套 js 语句 */}
    {/* <p>{if()}</p> */}
  </div>
)

// 使用 ReactDOM.render() 方法渲染 react 元素到页面中
ReactDOM.render(box, document.getElementById('root'))