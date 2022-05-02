<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->

# 1. 基础语法
### 1. 渲染表达式
> 使用 {} 

> 什么是表达式 TODO 

> 可以渲染变量，数组

```
// 渲染数组
var arr = [<h1>arr</h1>, <h2>arr2</h2>];

ReactDOM.render(<div>{arr}</div>, document.getElementById('arr'));

// 渲染变量
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

### 2. 添加属性
###### 标准属性
```
// 渲染属性
const element = <img src={user.avatarUrl}></img>;
const element = <a href="https://www.reactjs.org"> link </a>;
```
###### class 属性 / style 样式
```
 const VDOM = (
    <h1 id = {MyId.toLocaleUpperCase()}>
        <span className = "sss" style = {{fontSize:'50px'}}>sss</span>
    </h1>
)
```
###### style 样式
> 内联样式会自动+px
```
var myStyle = {
    fontSize: 100, // '100px' 同样效果
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```

###### htmlFor



### 3. 注释
> {/* 注释 */}


# 2. 底层原理
> 编译后，jsx 转为js

> babel 将 jsx 转为 React.createElement()

> 创建节点的两种方式
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

等效

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```


# 3. 注意
>  不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代

