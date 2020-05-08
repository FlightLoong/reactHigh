/**
 * 组件的 props 可以接收任意类型的数据，但是在使用 props 属性的时候
 * 
 * 组件内部需要对 props 的值进行校验，
 * 
 * 因为 props 是从外界传入的，无法保证组件使用者会传入什么格式的数据
 * 如果传入的数据格式不对，就会导致组件内部的错误
 * 
 * props 校验，就是在创建组件的时候，就给 props 指定类型和格式
 * 这样就可以在组件内部，捕获因 props 传值而导致的错误，从而给出明确的错误提示，增加组件的健壮性
 */
