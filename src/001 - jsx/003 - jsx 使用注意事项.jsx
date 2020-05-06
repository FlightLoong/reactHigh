import React from 'react'
import ReactDOM from 'react-dom'

/**
 * jsx 注意事项：
 * 
 * ① React 元素的属性名需要使用驼峰命名法
 * ② 例如： class --> className、for --> htmlFor
 * ③ 如果元素没有子节点，可以使用 /> 进行结束
 * ④ 如果存在多个同级的元素，必须创建一个根元素
 * ⑤ 使用小括号包裹 jsx ，可以避免 js 中的自动插入分号陷阱
 * ⑥ jsx 中的注释和 js 中的不一致
 */

//  使用小括号包裹 jsx
const box = (
  // 如果存在多个同级的元素，必须创建一个根元素
  <div>
    {/* 我是注释 */}
    {/* React 元素的属性名需要使用驼峰命名法 */}
    <div className="box">我在等风</div>
    {/* 如果元素没有子节点，可以使用 /> 进行结束 */}
    <div>也在等你</div>
    <p />
  </div>
)

// 使用 ReactDOM.render() 方法渲染 react 元素到页面中
ReactDOM.render(box, document.getElementById('root'))