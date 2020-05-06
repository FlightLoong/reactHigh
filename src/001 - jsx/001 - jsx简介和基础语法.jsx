import React from 'react'
import ReactDOM from 'react-dom'

/**
 * jsx 简介：
 * 
 * jsx 是 JavaScript XML 的简写，表示在 JavaScript 代码中写 XML(HTML) 格式的代码
 * jsx 的优势： 声明式语法更加直观，与 HTML 结构一致，减低了学习的成本，提升开发效率
 */

// 使用 jsx 语法创建 React 元素
const box = <div>这是一个标题</div>

// 使用 ReactDOM.render() 方法渲染 react 元素到页面中
ReactDOM.render(box, document.getElementById('root'))