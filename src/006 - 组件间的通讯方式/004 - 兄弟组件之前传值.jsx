import React from 'react'

/**
 * 兄弟组件传值
 * 
 * 将共享状态提升到最近的公共组件中，由公共父组件管理这个状态
 * 兄弟组件传值的思想： 状态提升
 * 公共父组件职责： 
 *   ① 接收共享的状态
 *   ② 提供操作共享状态的方法
 * 
 * 要通讯的子组件只需通过 props 接收状态或操作状态
 */

 class App extends React.Component {
  state = {
    num: ''
  }

  // 2. 父组件开始定义一个回调函数，接收 son2 传递的数据
  getSonData = (data) => {
    console.log(data)
    this.setState({
      num: data
    })
  }

  render() {
    return (
      <div>
        <h4>我是父组件</h4>
        <hr />
        {/* 1. 将两个组件全部在父组件中进行使用 */}
        <Son1 num={this.state.num} />
        <hr />
        {/* 3. 将生命的回调函数当成 props 传递给 son2 组件 */}
        <Son2 getData={this.getSonData} />
      </div>
    )
  }
}

class Son1 extends React.Component {
  render() {
    return (
      <div>
        <h4>我是子组件1</h4>
        <p>兄弟组件传递的数据是：{this.props.num}</p>
      </div>
    )
  }
}

class Son2 extends React.Component {
  state = {
    age: 18
  }
  // 3. 在 son2 子组件中调用父组件传递的回调函数，并传值
  setData = () => {
    this.props.getData(this.state.age)
  }

  render() {
    return (
      <div>
        <h4>我是子组件2</h4>
        <button onClick={this.setData}>传值给父组件</button>
      </div>
    )
  }
}

export default App
