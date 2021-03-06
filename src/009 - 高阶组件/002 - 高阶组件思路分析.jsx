/**
 * 高阶组件 -- 又称 HOC
 * 
 * 高阶组件是一个函数，接收要包装的组件，返回增强后的组件
 * 高阶组件内部创建一个类组件，在这个类组件中提供要复用的状态逻辑代码，
 * 通过 prop 将复用的状态传递给被包装组件 WrappendComponent
 */