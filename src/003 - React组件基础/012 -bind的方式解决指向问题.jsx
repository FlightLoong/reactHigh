import React from 'react'

export default class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      age: 0
    }

    // 在这边调用 bind 能够改变 this 指向的方法
    // 让这个方法，指向当前的组件实例
    // 在以后开发中使用的不是很多，但是在很久之前使用的比较多
    // 以后如果遇到这样的代码，需要知道是解决什么问题的就可以
    this.addFunc = this.addFunc.bind(this)
  }

  addFunc () {
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
