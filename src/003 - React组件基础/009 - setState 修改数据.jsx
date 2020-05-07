import React from 'react'
// 导入样式
import './index.css'

/**
 * setState 修改数据
 * 
 * ① 状态是可以修改、可变的
 * ② 语法：this.setState({ 要修改的状态： 最新的状态值 })
 * ③ 注意：不要直接修改 state 的值，这种做法是错误的
 * ④ setState() 方法的作用： 更新 UI 以及 修改 state
 * 
 * 这种更新数据的思想是：数据驱动视图
 */

class App extends React.Component {
  state = {
    info: '我在等风也等你'
  }

  render() {
    return (
      <div>
        <h4>state修改数据</h4>
        <div>{this.state.info}</div>
        <button onClick={() => {
          this.setState({
            info : '无风无月也无你'
          })
        }}>修改state</button>
      </div>
    )
  }
}

export default App
