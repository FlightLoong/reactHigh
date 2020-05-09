import React from 'react'
import emitter from './005 - events'

export default class Son2 extends React.Component {
  render () {
    return (
      <div>
        <h4>第二个子组件</h4>
        <button onClick={ () => emitter.emit('changeCount', { name: 'Tom and Jerry' }) }>点击注册事件</button>
      </div>
    )
  }
}
