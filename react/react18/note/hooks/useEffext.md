###  Effect Hook
> 函数组件增加了操作副作用的能力

> 副作用:执行过数据获取、订阅或者手动修改过 DOM

> 跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途, 只不过被合并成了一个 API

> React 将按照 effect 声明的顺序依次调用组件中的每一个 effect

> 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕
##### 调用时机
> React 会在每次渲染后调用副作用函数

> 相当于 componentDidMount 和 componentDidUpdate

> 可以访问到组件的 props 和 state

> return 执行函数，相当于 componentWillUnmount

##### 返回值
> 可以通过返回一个函数来指定如何“清除”副作用

##### 执行频率
> https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects 
> 通过第二个参数控制执行频率
### useContext 
> 不使用组件嵌套就可以订阅 React 的 Context

### useReducer
> useReducer 可以让你通过 reducer 来管理组件本地的复杂 state。