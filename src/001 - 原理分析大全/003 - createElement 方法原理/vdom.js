export function initVNode(vnode) {
  const { vtype } = vnode
  if (!vtype) {
    return document.createTextNode(vnode)
  }

  if (vtype === 1) {
    // 创建原生节点
    return createElement(vnode)
  } else if (vtype === 2) {
    // 表示类组件的方法
    return createClassCom(vnode)
  } else {
    // 表示函数组件的方法
    return createFunCom(vnode)
  }
}

// 创建原生节点的方法
function createElement(vnode) {
  // 传入需要渲染的元素
  const { type, props } = vnode
  // 根据元素创建元素内容
  const node = document.createElement(type)
  // console.log(props)
  const { children, ...rest } = props
  // console.log(children)
  // 根据传入的属性值给创建的元素添加属性
  Object.keys(rest).forEach(attr => {
    if (attr === 'className') {
      node.setAttribute('class', rest[attr])
    } else {
      node.setAttribute(attr, rest[attr])
    }
  })

  // 如果存在 children 属性，使用递归的方式再次创建节点
  children.forEach(a => {
    node.appendChild(initVNode(a))
  })

  return node
}

// 类组件的方法
function createClassCom(vnode) {
  const { type, props } = vnode
  // class 类创建的组件需要先实例化
  // console.log(vnode)
  const component = new type(props)
  const newNode = component.render()
  // console.log(newNode)
  return initVNode(newNode)
}

// 函数组件的方法
function createFunCom(vnode) {
  const { type, props } = vnode
  const newNode = type(props)
  return initVNode(newNode)
}

export function createVNode(vtype, type, props) {
  const vnode = {
    vtype, type, props
  }

  return vnode
}