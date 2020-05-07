/**
 * 
 * HTML 中的表单元素是可输入的，也就是表单元素有自己的可变状态
 * 
 * 但是，React 中可变状态通常保存在 state 中，并且只能通过 setState() 方法来修改
 * 
 * 于是 React将 state 与表单元素值value绑定到一起，由 state 的值来控制表单元素的值
 * 
 * 那么所谓的 受控组件 就是指： 值被 React 控制的表单元素
 */

// <input value="11">
// <input value={ this.state.value }>