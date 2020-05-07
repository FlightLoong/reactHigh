import React from 'react'
import './index.css'

/**
 * setState() 方法也可以添加第二个参数，
 * 第二个参数同样也是一个回调函数
 * 
 * 语法：setState(update[,callback])
 * 
 * 作用： 在状态更新（页面完成重新渲染）后立即执行某个操作
 */

export default class App extends React.Component {
  state = {
    count: 0
  }

  addCount = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    }, () => {
      console.log('数据更新成功啦 ~')
    })
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