import React from 'react'

/**
 *  1. input 元素
 *  2. textarea 元素
 *  3. select 元素
 *  4. checkbox 元素
 */

export default class App extends React.Component {

  state = {
    value: '',
    content: '',
    selectValue: '',
    checkbox: false
  }

  change = (e) => {
    // 2. 根据表单元素类型获取对应值
    // 2.1 获取表单元素
    const target = e.target
    // 2.2 target.type --- 表单元素类型
    const value = target.type === 'checkbox' ? target.checked : target.value

    // 3. 通过 [name] 来修改对应的state
    // 3.1 target.name -- 获取元素的名称
    const name = target.name
    // 3.1 根据获取的 name 值修改 state
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        {/* 1. 给表单元素添加name属性，名称与 state 相同 */}
        <input name="value" type="text" value={ this.state.value } onChange={ this.change } />
        <textarea name="content" value={this.state.content} onChange={ this.change } cols="10" rows="3"></textarea>
        <select name="selectValue" value={ this.state.selectValue } onChange={ this.change }>
          <option value="ys">亚瑟</option>
          <option value="dj">妲己</option>
          <option value="dw">典韦</option>
        </select>
        <input name="checkbox" type="checkbox" checked={ this.state.checkbox } onChange={ this.change } />

        <button onClick={() => this.setState({
          value: ''
        })}>11</button>
      </div>
    )
  }
}
