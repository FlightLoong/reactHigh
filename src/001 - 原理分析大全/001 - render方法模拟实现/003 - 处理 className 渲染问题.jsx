/**
 *  继续封装：
 * 
 *  在上一次封装中，存在一个问题：
 * 
 *  我们渲染的 class，还是 className ，那么浏览器是不识别 className 属性的，
 * 
 *  所以我们在这里将 className 处理成 class
 */


// 1、首先我们声明一个对象，对象里面有两个属性
//    一个是 type，代表的是需要创建元素的标签
//    一个是 props，代表的是需要创建的元素身上的一些属性
let obj = {
  type: 'div',
  props: {
    className: 'box',
    children: 'Tom and Jerry'
  }
}

// 2、然后声明一个 render 函数，来模拟 RreactDOM.render() 方法
//   render 方法接收两个参数
//   第一个：需要生成的元素对象
//   第二个：根元素的节点，也就是需要将新生成元素插入到的位置
function render(element, container) {
  // 3、将 type 以及 props 解构出来，进行处理
  let { type, props } = element

  // 4、根据 type 属性创建对应的元素
  let ele = document.createElement(type)

  // 5、因为 props 属性比较多
  //    使用 for .. in 对 props 进行遍历
  for (let attr in props) {
    // 6、判断 attr 是不是 children 属性
    //    如果是 children 属性，需要将内容插入到元素中
    //    如果不是 children 属性，那么就是 className，将属性渲染到新创建的元素中
    if (attr === 'children') {
      let nodeText = document.createTextNode(props[attr])
      ele.appendChild(nodeText)
    } else if (attr === 'className') {
      // 9、判断如果 attr 是 className，那么需要将其处理成 class
      ele.setAttribute('class', props[attr])
    } else {
      ele.setAttribute(attr, props[attr])
    }
  }

  // 7、将先创建的元素添加到容器中
  container.appendChild(ele)
}

// 8、调用封装好的 render 方法
render(obj, document.getElementById('root'))
