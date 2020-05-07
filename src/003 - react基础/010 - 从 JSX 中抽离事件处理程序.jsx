import React from 'react'
// 导入样式
import './index.css'

/**
 * 从 JSX 中抽离事件处理程序
 * 
 * JSX 中掺杂过多 JS 逻辑代码，会显得非常混乱
 * 推荐：将逻辑抽离到单独的方法中，保证 JSX 结构清晰
 * 
 * 但是会报错： TypeError: Cannot read property 'setState' of undefined
 * 
 * 这是因为事件处理程序中 this 的值为 undefined，
 * 我们需要将 this 指向组件实例即可
 */

class App extends React.Component {
  state = {
    info: '我在等风也等你'
  }

  handle() {
    this.setState({
      info: '无风无月也无你'
    })
  }

  render() {
    return (
      <div>
        <h4>state修改数据</h4>
        <div>{this.state.info}</div>
        <button onClick={this.handle}>修改state</button>
      </div>
    )
  }
}

export default App
