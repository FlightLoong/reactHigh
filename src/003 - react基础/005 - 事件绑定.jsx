import React from 'react'

// 导入样式
import './index.css'


/**
 * 事件绑定
 * 
 * ① React 事件绑定语法与 DOM 事件语法类似
 * ② 语法： on + 事件名称 = { 事件处理程序 }
 *   例如： onClick={ this.handle }
 * ③ 注意： React 事件采用驼峰命名法
 * ④ 函数组件中调用事件处理程序语法： onClick={ handle }
 *   类组件中调用事件处理程序语法： onClick={ this.handle }
 */

// class App extends React.Component {

//   handle () {
//     console.log('类组件触发事件')
//   }

//   render() {
//     return (
//       <div>
//         <h4>我在等风，也在等你</h4>
//         {/* 类组件中调用事件处理程序语法： onClick={ this.handle } */}
//         <button onClick={ this.handle }>绑定事件</button>
//       </div>
//     )
//   }
// }

// --------------------------------------------------

function App() {
  function handle() {
    console.log('函数组件触发事件')
  }

  return (
    <div>
      <h4>我在等风，也在等你</h4>
      {/* 函数组件中调用事件处理程序语法： onClick={ handle } */}
      <button onClick={handle}>绑定事件</button>
    </div>
  )
}

export default App
