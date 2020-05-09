import React from 'react'
import emitter from './005 - events'
export default class Son1 extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 1
    }

    emitter.addListener('changeCount', (data) => {
      // console.log(data)
      this.setState({
        count: data.name
      })
    })
  }

  render() {
    return (
      <div>
        <h4>第一个子组件</h4>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
