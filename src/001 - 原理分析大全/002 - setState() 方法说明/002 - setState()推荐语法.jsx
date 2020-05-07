import React from 'react'
import './index.css'

/**
 * 1. 第二种语法： setState((state, props) => {})
 *    参数 state：表示最新的 state
 *    参数 props：表示最新的 props
 * 
 * 2. 第二种写法，同样也是异步的操作
 * 2. 如果采用第二种写法，那么第二次调用的 setState() 方法依赖于上一次返回的结果
 */

export default class App extends React.Component {
  state = {
    count: 0
  }

  addCount = () => {
    this.setState((state, props) => {
      return {
        // 这时候，不能在里面使用 this.state，
        // 而应当使用 setState() 参数中的 state 
        // 参数 state 是 this.state 的映射
        count: state.count + 1
      }
    })

    // 第二个 setState() 方法依赖于上一个 setState() 方法
    this.setState((state, props) => {
      return {
      }
    })

    // 第二种写法，更新数据同样是异步的操作
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <h4>setState() 异步更新数据</h4>
        <div>state值为: {this.state.count}</div>
        <button onClick={this.addCount}>更新数据</button>
      </div>
    )
  }
}