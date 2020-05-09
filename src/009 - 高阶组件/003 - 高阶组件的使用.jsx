import React from 'react'
import img from './cat.png'


/**
 *  高阶组件核心思想: 包裹、嵌套
 * 
 *  1. 封装一个函数，这个函数里面需要嵌套一个类组件
 *  2. 类组件需要一个组件(函数)作为参数
 *  3. 类组件中定义复用的数据以及操作复用数据的方法，
 *     那么也吧函数组件进行传递过来了，
 *     只需要将复用的数据传递到传入的函数中，
 *     就可以实现数据 和  UI 结合，
 *     从而渲染 UI 结构
 * 
 *   
 * 
 *  思考：为什么里面嵌套的不是函数组件
 * 
 *  函数组件没有私有的数据，所以也不能定义复用的数据
 *  一般主要用来渲染 UI 结构
 */

// 1. 创建一个函数，名称约定以 with 开头
// 2. 指定函数参数，参数应该以大写字母开头（作为要渲染的 UI 组件）
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
      return <WrappedComponent {...this.state} />
    }
  }

  return Mouse
}

// 用来测试高阶组件
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
