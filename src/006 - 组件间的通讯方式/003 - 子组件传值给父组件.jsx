import React from 'react'

/**
 * 子组件传递数据给父组件
 * 
 * 思路： 利用回调函数，父组件提供回调函数，子组件调用函数，将要传递的数据作为回调函数的参数
 * 
 * ① 父组件提供一个回调函数，用于接收数据
 * ② 将该函数作为属性的值，传递给子组件
 * ③ 子组件通过 props 调用回调函数
 * ④ 将子组件的数据作为参数传递给回调函数
 */

class App extends React.Component {

  state = {
    age: ''
  }

  // 1、父组件提供一个回调函数，用于接收数据
  getSonData = (data) => {
    console.log(data)
    this.setState({
      age: data
    })
  }

  render() {
    return (
      <div>
        <h4>父组件</h4>
        <p>子组件传递的数据是：{this.state.age} </p>
        <hr />
        {/* 2、将该函数作为属性的值，传递给子组件 */}
        <Son getSonData={this.getSonData}></Son>
      </div>
    )
  }
}

class Son extends React.Component {

  state = {
    age: 10
  }

  getSonData = () => {
    // 3、子组件通过 props 调用回调函数
    // 4、将子组件的数据作为参数传递给回调函数
    this.props.getSonData(this.state.age)
  }

  render() {
    return (
      <div>
        <h4>子组件</h4>
        <button onClick={this.getSonData} >传递给父组件</button>
      </div>
    )
  }
}

export default App
