import React from 'react'
import './index.css'

/**
 * 1. 可以给组件传递任意类型的数据
 * 2. props 是只读的，也就是只能读取到属性的值，无法修改对象
 * 3. 注意：使用类组件时，如果写了构造函数，应该将 props 传递给 super()，否则在构造函数中无法获取到 props
 */

class App extends React.Component {

  constructor (props) {
    // 使用类组件时，如果写了构造函数，应该将 props 传递给 super()，否则在构造函数中无法获取到 props
    super(props)

    console.log(props)
  }

  handle = () => {
    console.log(this.props)
    //  props 是只读的，也就是只能读取到属性的值，无法修改对象
    // this.props.age = this.props.age + 1
  }

  render() {
    return (
      <div>
        {/* 可以给组件传递任意类型的数据 */}
        <h4>组件的props</h4>
        <p>字符型: {this.props.name}</p>
        <p>数值型: {this.props.age}</p>
        <p>布尔型: {typeof this.props.bol}</p>
        {/* jsx 也是一种数据类型 */}
        <p>jsx: {this.props.info}</p>
        <p>函数: {this.props.func}</p>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}

export default App


// ReactDOM.render(<App
//   name="Jerry"
//   age={10}
//   bol={true}
//   info={<span>你好，世界</span>}
//   func={console.log('1')}
// />, document.querySelector('#root'))
