import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 类组件，就是使用 class 类进行创建的组件
 * 
 * ① 类名称也必须是大写字母
 * ② 类组件继承自 React.Component 父类 或者 Component，从而可以使用父类中提供的属性和方法
 * ③ 类组件必须提供 render() 方法
 * ④ render() 方法内部必须使用 return  返回值，表示该组件的结构
 * ⑤ 如果没有返回值，需要 return null，表示不渲染任何内容
 */

// 类名称也必须是大写字母
// 类组件继承自 React.Component 父类 或者 Component，从而可以使用父类中提供的属性和方法
class App extends React.Component {
  // 类组件必须提供 render() 方法
  render() {
    // render() 方法内部必须使用 return  返回值，表示该组件的结构
    return (
      <div>
        <h4>我在等风，也在等你</h4>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
