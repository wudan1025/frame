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
> fn, 包含新状态的函数, 普通函数，箭头函数均可

> cb 在setState设置成功，且组件重新渲染后调用

> 推荐使用 setState(fn,cb)

> state,props 为fn 参数
```
// state 上次更新的 state 值（当前渲染的值）
// props 组件接收到最新的参数
this.setState((state,props) => {
  return {quantity: state.quantity + 1};
});
```

### 3. state作为props传递给子组件

```
function FormattedDate(props) {
  return <h2>{props.date.toLocaleTimeString
    ()} </h2>
}

class Clock extends React.Component {
  constructor(props) {
    // 将 props 传递到父类的构造函数中
    super(props)
    this.state = {
      data: new Date(),
      name: props.name
    }
  }

  // 组件第一次被渲染到 DOM 中的时候 挂载
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState((state, props) => {
      // console.log(state);
      // console.log(props);
      return {
        data: new Date(),
        name: state.name + 1
      }

    })
  }

  // 当 DOM 中 Clock 组件被删除的时候 卸载
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // 每次组件更新时 render 方法都会被调用
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h1>{this.state.data.toLocaleTimeString()}</h1>
        <h1>{this.state.name}</h1>
        <FormattedDate date={this.state.data} />
      </div>
    )
  }
}

let name = 'name'
function tick() {
  ReactDOM.render(<Clock name={name
  } />, document.getElementById('example'))
}

tick()
```