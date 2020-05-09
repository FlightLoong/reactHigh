import React from 'react'

// 导入组件
const { Provider, Consumer } = React.createContext()

/**
 * 如果出现组件层级比较多的情况下，如果使用 props 来进行传递会比较麻烦
 * 这时候会使用 Context 来进行传递
 * 
 * Context 就是用来实现跨组件传递数据的
 * 
 * 实现步骤：
 * ① 调用 React. createContext() 创建 Provider（提供数据） 和 Consumer（消费数据） 两个组件
 * ② 使用 Provider 组件作为父节点
 * ③ 设置 value 属性，表示要传递的数据
 * ④ 调用 Consumer 组件接收数据。
 */

export default class App extends React.Component {
  state = {
    name: '我在等风也等你'
  }
  render() {
    return (
      // 用 Provider 组件作为父节点
      <Provider value={this.state.name}>
        <div>
          <h4>跨组件通信</h4>
          <hr />
          <Node></Node>
        </div>
      </Provider>
    )
  }
}

class Node extends React.Component {
  render() {
    return (
      <div>
        <h4>第一个子组件</h4>
        <hr />
        <SubNode></SubNode>
      </div>
    )
  }
}

class SubNode extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {
            data => (
              <div>
                <h6>Node 的子组件</h6>
                <div>跨组件传递的数据是: <span style={{ color: 'red' }}>{data}</span></div>
              </div>
            )
          }
        </Consumer>
      </div>
    )
  }
}
