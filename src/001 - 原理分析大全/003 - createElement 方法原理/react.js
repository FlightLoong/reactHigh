import { createVNode } from './vdom'
// 创建 createElement 方法
// 三个参数：
//    1. type --- 元素的类型
//    2. props --- 元素的属性
//    3. children --- 元素的内容
function createElement(type, props, ...children) {
  // 将所有的元素内容添加到 props 属性中
  props.children = children
  // 删除一些多余的参数
  delete props.__source
  delete props.__self

  // 对 type 类型进行判断，原生标签、函数组件、类组件
  let vtype

  if (typeof type === 'string') {
    vtype = 1
  } else if (typeof type === 'function') {
    // 类组件与函数组件在类型判断的时候都是 function
    if (type.isClassComponent) {
      // 表示是类组件
      vtype = 2
    } else {
      // 表示是函数组件
      vtype = 3
    }
  }
  // return { vType, type, props }
  // console.log(vtype, type, props)
  return createVNode(vtype, type, props)
}

export class Component{
  constructor(props){
      this.props=props;
      this.state={}
  }
  static isClassComponent=true;
  setState(state){

  }
}

export default { createElement }
