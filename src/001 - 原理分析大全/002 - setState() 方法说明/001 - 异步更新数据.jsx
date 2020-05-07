import React from 'react'
import './index.css'

/**
 * 1. setState方法可以用来更新数据，但是要注意的是更新数据的操作是异步的
 * 2. 使用 setState() 方法后，后面的操作不能依赖于前面的这次  setState()
 * 3. 一个方法中多次调用 setState() ，只会触发一次重新渲染
 */

export default class App extends React.Component {
  state = {
    count: 0
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })

    // 更新之前的数据
    // console.log(this.state.count)

    this.setState({
      count: this.state.count + 2
    })

    // 调用了多次 setState() 只会执行后面的这个 setState(0)
    // 更新之前的数据
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