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

> react 是普通的js 对象，用来描述在屏幕上看到的内容

> ReactDOM来确保浏览器中的真实DOM数据和React元素保持一致

> 转化
```
// jsx
<h1 className="title" style={{color:'red'}}>hello</h1>

// babel 转义后
React.createElement("h1", {
  className: "title",
  style: {
    color: 'red'
  }
}, "hello");

// 返回的结果
{
  type:'h1',
  props:{
    className: "title",
    style: {
      color: 'red'
    }
  },
  children:"hello"
}
```


# 3. 注意
>  不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代

