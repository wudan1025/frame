### state hook
>  声明状态

###### 初始化
> initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用
```
// count 直接赋值
const [count, setCount] = useState(0);

// count 需要复杂计算
const [count, setCount] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

###### 读取 
> {变量名}

```javascript
<p>You clicked {count} times</p>
```

###### 更新
>  不需要使用 this

```javascript
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

> 获取上一次state 值

```javascript
setCount(prevState => {
  // 也可以使用 Object.assign
  return {...prevState, ...updatedValues};
});
```

###### 多个 state
> 参考  https://zh-hans.reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
```javascript 
// 定义
function Box() {
  const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });
  // ...
}

// 更新

useEffect(() => {
  function handleWindowMouseMove(e) {
    // 展开 「...state」 以确保我们没有 「丢失」 width 和 height
    setState(state => ({ ...state, left: e.pageX, top: e.pageY }));
  }
  // 注意：这是个简化版的实现
  window.addEventListener('mousemove', handleWindowMouseMove);
  return () => window.removeEventListener('mousemove', handleWindowMouseMove);
}, []);
```
