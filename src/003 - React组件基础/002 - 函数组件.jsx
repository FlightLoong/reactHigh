import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 函数组件： 使用 JS 的函数或者箭头函数创建的组件
 * 
 * ① 函数组件的函数名称首字母必须大写
 * ② 函数内部必须有返回值，返回值代码组件的结构
 * ③ 如果没有返回值，需要 return null，表示不渲染任何内容
 * ④ 用函数名作为组件标签名，用以渲染函数组件
 * ⑤ 组件标签可以是单标签也可以是双标签
 */


// 函数组件的函数名称首字母必须大写
function App () {
  // 函数内部必须有返回值，返回值代码组件的结构
  return (
    <div>
      <h4>我在等风，也在等你</h4>
    </div>
  )
  // 如果没有返回值，需要 return null，表示不渲染任何内容
  // return null
}

// 用函数名作为组件标签名，用以渲染函数组件
// 件标签可以是单标签也可以是双标签
ReactDOM.render(<App />, document.querySelector('#root'))
