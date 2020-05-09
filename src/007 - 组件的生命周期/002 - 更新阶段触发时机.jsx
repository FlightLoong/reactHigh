import React from 'react'

/**
 *  触发组件更新的时机
 *  1. props 值发生了改变
 *  2. this.setState() 更改数据
 *  3. this.forceUpdate() 强制更新组件 
 */

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      age: 10
    }
  }

  handle = () => {
    this.setState({
      age: 11
    })
  }

  render() {
    return (
      <div>
        <h4>父组件</h4>
        <button onClick={ this.handle }>更改数据</button>
        <hr />
        <Son age={this.state.age} />
      </div>
    )
  }
}

class Son extends React.Component {

  componentDidMount () {
    console.log('--------------')
    this.forceUpdate()
  }

  render() {
    console.warn('组件发生更新')
    return (
      <div>
        <h4>子组件</h4>
        <div>{this.props.age}</div>
      </div>
    )
  }
}

export default App
