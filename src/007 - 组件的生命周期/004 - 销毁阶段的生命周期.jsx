import React from 'react'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      age: 1
    }
  }

  handle = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  render() {
    return (
      <div>
        <h4>父组件</h4>
        <button onClick={ this.handle }>更改数据</button>
        <hr />
        {
         this.state.age === 3 ? (<h4>等于3，不渲染组件</h4>) : (<Son age={this.state.age} />)
        }
      </div>
    )
  }
}

class Son extends React.Component {

  componentDidMount () {
    this.timerId = setInterval(() => {
      console.log('定时器正在执行~')
    }, 500)
  }

  // 这是销毁时会执行的生命周期钩子函数
  // 作用：在组件从页面中卸载，也就是在页面中不在使用该组件的时候
  // 执行相关的清理操作，就是清除当前组件产生的一些冗余数据
  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div>
        <h4>子组件</h4>
        <div>{this.props.age}</div>
      </div>
    )
  }
}

export default App
