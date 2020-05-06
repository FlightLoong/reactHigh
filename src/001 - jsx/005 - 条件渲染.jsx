import React from 'react'
import ReactDOM from 'react-dom'

/**
 * jsx 的条件渲染
 * ① if / else
 * ② 三元表达式
 * ③ 逻辑与运算符 
 */
const isLoading = true

// if / else
// const loadData = () => {
//   if (isLoading) {
//     return <div>loading...</div>
//   }
//   return <div>数据加载完成，此处显示加载后的数据</div>
// }

// --------------------------------------------

// 三元表达式：
// const loadData = () => {
//   return isLoading ? (<div>loading...</div>) : (<div>数据加载完成，此处显示加载后的数据</div>)
// }

// --------------------------------------------

// 逻辑与运算符：
const loadData = () => {
  return isLoading && (<div>loading...</div>)
}

const box = (
  <div>
    <h4>条件渲染：</h4>
    <div>{loadData()}</div>
  </div>
)

// 使用 ReactDOM.render() 方法渲染 react 元素到页面中
ReactDOM.render(box, document.getElementById('root'))