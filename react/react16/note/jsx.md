<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
> 1. JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。

> 2. 它是类型安全的，在编译过程中就能发现错误。

> 3. 使用 JSX 编写模板更加简单快速。


# 特点 
### js
> 1. React DOM 使用 className 和 htmlFor 来做对应的属性。

> 2. 不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代

> 3. 自动插入js
```
var arr = [<h1>arr</h1>, <h2>arr2</h2>];

ReactDOM.render(<div>{arr}</div>, document.getElementById('arr'));
```
### 组件
> 原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头

> 组件类只能包含一个顶层标签

> this.props 传递参数
```
// 写法1
function tick1() {
  const element = (
    <div>
      <h1>hello</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('example2'));
}

// setInterval(tick1, 1000);

// 写法2
function Clock(props) {
  return (
    <div>
      <h1>hello world</h1>
      <h2>现在是 {props.data.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick2() {
  ReactDOM.render(
    <Clock data={new Date()} />,
    document.getElementById('example')
  );
}

// 写法3

class Clock3 extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h2>3 现在是 {this.props.data.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function tick3() {
  ReactDOM.render(
    <Clock3 data={new Date()}></Clock3>,
    document.getElementById('example')
  );
}
```
###### 函数组件


##### class 组件

###### 复合组件
```
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
);
```

### 样式
> 6. 内联样式会自动+px
```
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```

### 注释
> {/* 注释 */}

