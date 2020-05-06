import React from 'react'
import ReactDOM from 'react-dom'

// let element = (<div className="box">Tom and Jerry</div>)

// 上面的代码等同于下面这句

let element = React.createElement('div', { className: 'box' }, 'Tom and Jerry')

// ----------------------------------------------------------------------
// Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用
// 返回一个对象树，也就是 React 元素
// ---------------------------------------------------------------------- 

// 返回的是 React 元素
console.log(element)

// 打印返回的 React 元素中，有两个重要的属性
// 一个是 type: 代表的是新创建的元素
// 一个是 props: 代码的是新创建元素的属性值

ReactDOM.render(element, document.getElementById('root'))