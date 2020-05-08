import React from 'react'
import './index.css'
/**
 * 组件是封闭的，要接收外部的数据应该通过 props 来实现
 * props 的作用：接收传递给组件的数据
 * 传递数据：给组件标签添加属性
 * 
 * 接收数据：函数与组件与类组件接收数据的方式不同
 *    函数组件通过参数 props 接收数据
 *    类组件通过 this.props 接收数据
 */

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h4>组件的props</h4>
//         <p>
//           {/* 在函数组件内部使用 this.props 来接收外界传递的数据 */}
//           <span>姓名: {this.props.name}</span> 年龄: { this.props.age }<span></span>
//         </p>
//       </div>
//     )
//   }
// }

// -------------------------------------------

function App(props) {
  return (
    <div>
      <h4>组件的props</h4>
      <p>
        {/* 在函数内部，使用 props 来接收外界传递的数据 */}
        <span>姓名: {props.name}</span> 年龄: {props.age}<span></span>
      </p>
    </div>
  )
}

export default App

// ReactDOM.render(<App name="Jerry" age={10} />, document.querySelector('#root'))
