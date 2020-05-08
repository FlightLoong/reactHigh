import React from 'react'

// import Proptypes from 'prop-types'

import './index.css'

/**
 * 在使用 props 的时候，可以为其指定相关的默认值
 * 如果在渲染组件的时候，没有指定具体的值，那么就使用指定的默认值
 * 
 * 使用 组件名.defaultProps 的方式就可以为 props 添加默认值
 */

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>组件的props</h4>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
    )
  }
}

// 使用 组件名.propTypes 来给组件的 props 添加校验规则
App.defaultProps = {
  name: 'Tom And Jerry',
  age: 18
}

export default App