import React from 'react'

export default class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      age: 0
    }
  }

  // 箭头函数中没有 this 指向
  // this 指向当前函数所在区间
  addFunc = () => {
    console.log(this)
    this.setState({
      age: this.state.age + 1
    })
  }

  render () {
    return (
      <div>
        <div>{ this.state.age }</div>
        <hr/>
        <button onClick={ this.addFunc }>+ 1</button>
      </div>
    )
  }
}
