import React from 'react'

export default class App extends React.Component {
  
  // 1、控制表单元素值的来源
  state = {
    value: ''
  }

  // 4、控制表单元素值的变化
  change = (e) => {
    // console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  render () {
    return (
      <div>
        {/* 2. 将表单元素的值交给 state 进行管理 */}
        {/* 3. 使用 onChange 事件监听到表单元素的改变 */}
        <input type="text" value={ this.state.value } onChange={ this.change } />
      </div>
    )
  }
}
