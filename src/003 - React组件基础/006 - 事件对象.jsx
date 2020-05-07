import React from 'react'

// 导入样式
import './index.css'


/**
 * 事件对象
 * 
 * 使用事件处理的参数获取到事件对象
 * 在 React 中，我们通常把事件对象又称为 合成事件 或者 合成对象
 * 合成事件： 兼容所有的浏览器，无需担心跨浏览器之间的兼容性问题
 * 
 * 除兼容所有浏览器外，合成事件还拥有和浏览器原生事件相同的接口
 * 包括 stopPropagation()和preventDefault()
 * 
 * 注意： 我们无法在异步的操作中获取到event 
 */

class App extends React.Component {

  // handle(e) {
  //   // 使用合成事件阻止默认行为
  //   e.preventDefault()
  // }

  // 错误的做法：
  handle(e) {
    // 注意： 我们无法在异步的操作中获取到 event
    // 如果在异步操作中使用 event 将会报错
    setInterval(() => {
      e.preventDefault()
    })
  }

  render() {
    return (
      <div>
        <h4>我在等风，也在等你</h4>
        <a href="http://www.baidu.com" onClick={this.handle}>百度一下，你就知道</a>
      </div>
    )
  }
}

export default App
