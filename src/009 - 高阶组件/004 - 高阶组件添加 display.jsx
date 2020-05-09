import React from 'react'
import img from './cat.png'

/**
 * 高阶组件说白了就是包裹、嵌套
 */

// 1. 创建一个函数，名称约定以 with 开头
// 2. 指定函数参数，参数应该以大写字母开头（作为要渲染的组件）
// WrappedComponent 这是一个形参，代表是以后要增强的组件
function withMouse(WrappedComponent) {
  // 3. 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }

    // 4. 在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件
    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

// 用来测试高阶组件
// 组件极简模型
const Position = props => (
  <p> 鼠标当前位置：(x: {props.x}, y: {props.y})</p>
)

// 猫捉老鼠的组件：
const Cat = props => (
  <img
    src={img}
    alt=""
    style={{
      position: 'absolute',
      top: props.y - 64,
      left: props.x - 64
    }}
  />
)

// 5. 调用该高阶组件，传入要增强的组件，会返回一个增强的组件
const MousePosition = withMouse(Position)

// 调用高阶组件来增强猫捉老鼠的组件
const MouseCat = withMouse(Cat)

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 6. 通过返回值拿到增强后的组件，并将其渲染到页面中 */}
        <MousePosition />
        <MouseCat />
      </div>
    )
  }
}

export default App
