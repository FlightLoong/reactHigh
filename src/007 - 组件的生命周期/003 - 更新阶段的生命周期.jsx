import React from 'react'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      age: 10
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
        <Son age={this.state.age} />
      </div>
    )
  }
}

class Son extends React.Component {
  // 在更新阶段，第二个执行的生命周期是 componentDidUpdate
  // componentDidUpdate 的作用发送网络请求以及获取 Dom 元素
  // 在这个阶段，更新的 DOM ，也就是 UI 结构已经渲染完成
  componentDidUpdate (prevProps) {
    console.warn('组件更新完成')
    // 【注意事项：在 componentDidUpdate 这个生命周期中，不能调用 this.setState】
    // 因为容易造成死循环
    // 如果以后想在 componentDidUpdate 中调用 this.setState
    // 必须加一个 if 判断条件，也就说，必须有一个终止的条件
    if (prevProps === this.props.age) {
      this.setState({

      })
    }

    // 为什么不能直接调用  this.setState
    // 因为 this.setState 会造成数据以及页面更新
    // 更新之后，就会造成组件更新，那么组件只要一更新，就会调用 componentDidUpdate ，
    // 从而又调用this.setState，从而形成死循环
    // this.setState({

    // })
  }

  // 在更新阶段，首先执行的生命周期是 render 
  // render 的作用也是渲染 UI 结构
  // 这个 render 实际上和创建阶段的 render 是同一个 render
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
