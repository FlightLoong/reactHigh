import React from 'react'
import ReactDOM from 'react-dom'

/**
 * jsx 中给元素添加样式 
 * ① class
 * ② style
 */
 
const box = (
  <div>
    {/* 
      1. 对象中嵌套一个对象，然后在嵌套的对象中以键值的形式定义样式
      2. 如果之前属性是采用的中划线写法，那么现在需要转成驼峰写法
    */}
    <div className="box" style={ {color: 'skyblue', fontSize: '16px'} }>jsx 样式处理</div>
  </div>
)


ReactDOM.render(box, document.getElementById('root'))