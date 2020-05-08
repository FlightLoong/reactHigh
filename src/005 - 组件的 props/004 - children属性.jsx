import React from 'react'
import './index.css'

/**
 * 1. children 属性：表示组件标签的子节点，当组件标签有子节点时，props 就会触发该属性
 *    没有组件的标签没有子节点，是么有这个属性的
 * 
 * 2. children 属性：与普通的 props 一值，可以接收各种类型的数据
 */

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>组件的props</h4>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default App