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
    isChecked: false
  }

  change = (e) => {
    // console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  areaChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  selectChange = (e) => {
    this.setState({
      selectValue: e.target.value
    })
  }

  checkChange = (e) => {
    this.setState({
      isChecked: e.target.checked
    })
  }

  render () {
    return (
      <div>
        <input type="text" value={ this.state.value } onChange={ this.change } />
        <textarea value={this.state.content} onChange={ this.areaChange } cols="10" rows="3"></textarea>
        <select value={ this.state.selectValue } onChange={ this.selectChange }>
          <option value="ys">亚瑟</option>
          <option value="dj">妲己</option>
          <option value="dw">典韦</option>
        </select>
        <input type="checkbox" checked={ this.state.isChecked } onChange={ this.checkChange } />
      </div>
    )
  }
}
