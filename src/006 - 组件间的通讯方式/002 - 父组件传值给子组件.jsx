import React from 'react'

/**
 * 父组件传递数据给子组件
 * 
 * ① 父组件提供要传递的 state 数据
 * ② 给子组件标签添加属性，值为 state 中的数据
 * ③ 子组件中通过 props 接收到父组件中传递的数据
 */

class App extends React.Component {
  state = {
    name: 'Tom and Jerry'
  }

  render() {
    return (
      <div>
        <h4>父组件</h4>
        <hr />
        <Son name={this.state.name}></Son>
      </div>
    )
  }
}

class Son extends React.Component {
  render() {
    return (
      <div>
        <h4>子组件</h4>
        <p>父组件传递的数据: {this.props.name}</p>
      </div>
    )
  }
}

export default App
