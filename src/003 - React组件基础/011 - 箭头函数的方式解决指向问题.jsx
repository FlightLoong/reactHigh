import React from 'react'

export default class App extends React.Component {

  state = {
    age: 0
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
        {/* 
          为什么这里改成箭头函数就能够改变 this 指向的 ？

          改成箭头函数以后， this 指向就变成了 箭头函数中 this 的指向
          箭头函数中 this 的指向，指向了当前的组件
          所以在声明的方法，this 指向与 箭头函数一致

          所以这时候， 就能够实现 + 1 的操作
        */}
        <button onClick={ () => this.addFunc() }>+ 1</button>
      </div>
    )
  }
}
