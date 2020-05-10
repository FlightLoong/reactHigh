import { initVNode } from './vdom.js'
// 创建 render 方法
// 两个参数：
//    1. vNode 需要渲染的元素
//    2. container 元素的挂载位置
function render(vnode, container) {
  // container.innerHTML =`<pre>
  //     ${JSON.stringify(vnode,null,2)}
  // </pre>`
  container.appendChild(initVNode(vnode));
}
export default { render }
