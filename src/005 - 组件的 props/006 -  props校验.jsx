import React from 'react'

import Proptypes from 'prop-types'

import './index.css'

/**
 * 如果想对 props 进行校验，需要先安装包 yarn add prop-types
 * 
 * 使用 组件名.propTypes 来给组件的 props 添加校验规则
 * 
 * 常用的校验规则
 *   ① 常见类型： array、bool、function、number、object、string
 *   ② React元素类型：element
 *   ③ 必须填写：isRequired
 *   ④ 特定结构的对象: shape({ })
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
App.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number
}

export default App

// ReactDOM.render(<App name="Tom" age={18} />, document.querySelector('#root'))
