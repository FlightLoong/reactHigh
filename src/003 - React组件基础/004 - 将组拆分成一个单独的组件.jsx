import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 抽离为独立 JS 文件
 * 
 * 当项目中拆分的组件越来越多以后
 * 通常的做法是将组件放到一个单独的 js 文件中，
 * 作为一个单独的个体，方便复用和调用
 * 
 * 拆分步骤：
 * 
 * ① 创建一个后缀名为 .jsx 或者 .js 的文件
 * ② 在文件中创建 类组件 或者 函数组件
 * ③ 使用 export default ，导出创建的组件
 * ④ 在使用组件的位置使用 import 的方式导出组件
 */

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>我在等风，也在等你</h4>
      </div>
    )
  }
}

// 使用 export default 导出组件
export default App
