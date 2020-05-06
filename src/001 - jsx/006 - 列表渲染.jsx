import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 列表渲染
 * 
 * ① 如果要渲染一组数据，react 中推荐使用数组的 map() 方法
 * ② 注意：渲染列表时应该添加 key 属性，key 属性的值要保证唯一
 * ③ map() 遍历哪个元素，就需要给那个元素添加 key 属性
 * ④ 注意：尽量避免使用索引号作为 key，而使用后台返回的 id
 */

const arr = [
  { id: 1, name: '我在等风' },
  { id: 2, name: '也在等你' },
  { id: 3, name: '追风少年' }
]

// 2. 创建元素
const box = (
  <div>
    {/* 在 React 中，列表渲染官方推荐使用 map 方法 */}
    {
      // arr.map(item => (<span>{ item.name }</span>))

      // arr.map(item => <p key={item.id}>{ item.name }</p>)

      arr.map(item => {
        return <p key={item.id}>{item.name}</p>
      })
    }
  </div>
)


ReactDOM.render(box, document.getElementById('root'))