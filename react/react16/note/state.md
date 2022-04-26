<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
# 定义 
> 控制组件状态，从而控制渲染

# 修改状态
> setState 修改状态唯一方式

> 异步批量更新

> setState总是会触发一次组件重绘

### 1. setState({},cb)
> 参数为对象

> 多次调用批处理, 批处理前转为浅合并，多次修改只生效一次，可能不准
```
// 调用
this.setState({quantity: 2})
this.setState({quantity: 2})

// 底层
Object.assign(
  previousState,
  {quantity: state.quantity + 1},
  {quantity: state.quantity + 1},
  ...
)
```

> 不建议使用

### 2. setState(fn,cb)
> fn, 包含新状态的函数

> cb 在setState设置成功，且组件重新渲染后调用

> 推荐使用

```
this.setState((state) => {
  return {quantity: state.quantity + 1};
});
```