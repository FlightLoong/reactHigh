import React from 'react'

// 导入图片
import img from './cat.png'

// 封装 Mouse 组件
class Mouse extends React.Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  handle = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handle)
  }

  componentWillMount() {
    window.removeEventListener('mousemove', this.handle)
  }

  render() {
    return this.props.children(this.state)
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>render props</h4>
        {/* 鼠标位置的使用 */}
        {/* 在使用组件时，添加一个值为函数的prop，通过 函数参数 来获取（需要组件内部实现） */}
        {/* <Mouse render={
          (mouse) => (
            <div>x: { mouse.x}, y: {mouse.y}</div>
          )
        }></Mouse> */}

        <Mouse>
          {
            (mouse) => (
              <div>x: { mouse.x}, y: {mouse.y}</div>
            )
          }
        </Mouse>

        {/* 移动的 cart */}
        {/* <Mouse render={(mouse) => (
          <img src={img} style={{
            position: 'absolute',
            top: mouse.y - 64,
            left: mouse.x - 64
          }} />
        )} /> */}
        <Mouse>
          {(mouse) => (
            <img src={img} style={{
              position: 'absolute',
              top: mouse.y - 64,
              left: mouse.x - 64
            }} />
          )}
        </Mouse>
      </div>
    )
  }
}

export default App
