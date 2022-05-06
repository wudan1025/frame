#  Effect Hook 概念
> 函数组件增加了操作副作用的能力

> 副作用:输入一样，输出不一样，例如 执行过数据获取、订阅或者手动修改过 DOM，

> 副作用 对应 纯函数

> 纯函数：输入一样，输出完全一样的函数

> 跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途, 只不过被合并成了一个 API

> React 将按照 effect 声明的顺序依次调用组件中的每一个 effect

> 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕
# 调用时机
> React 会在每次渲染后调用副作用函数

> 相当于 componentDidMount 和 componentDidUpdate

> 可以访问到组件的 props 和 state

> return 执行函数，相当于 componentWillUnmount

> 通过第二个参数控制是否执行当前useEffect

# 返回值
> 可以通过返回一个函数来指定如何“清除”副作用

# 执行频率
> https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects 
> 通过第二个参数控制执行频率, 

> [] 只调用一次todo
```javascript
// 第二个参数为空，与 compoentdidmouted 相同
useEffect(() => {
},[])
``` 

> [count] count 修改时才调用

> 不写第二个参数，UI 每次渲染更新，都会重新调用


# async/await 
> 直接在 async() => {} 会警告

> 新建 async/await 函数，执行函数
```
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const responses = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // .then(response => response.json())
      // .then(data => setRobotGallery(data))
      const data = await responses.json();
      setRobotGallery(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  fetchData();
}, []);
```
