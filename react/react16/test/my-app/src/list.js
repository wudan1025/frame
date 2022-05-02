/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';

// 写法1 开始
// const numbers = [1, 2, 3, 4];

// const listItems = numbers.map((number) => <li>{number}</li>);

// ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('list'));
// 写法1 结束

// 写法2 开始
// class List extends React.Component {
//   constructor() {
//     super();
//     this.numbers = [1, 2, 3, 4];
//     this.listItems = this.numbers.map((number) => (
//       <li key={number.toString()}>{number}</li>
//     ));

//     // this.number = [1, 2, 3, 4];
//     // this.getli = this.getli.bind(this);
//   }

//   getli() {
//     // numbers.map((number) => <li>{number}</li>);
//     let result = this.numbers.map((number) => <li key={number}>{number}</li>);
//     // console.log(result);
//     // return null;
//     // return result;
//     return this.numbers.map((number) => <li key={number}>{number}</li>);
//   }

//   render() {
//     return <ul>{this.getli()}</ul>;
//     // return <ul>{this.listItems}</ul>;
//   }
// }

// ReactDOM.render(<List />, document.getElementById('list'));

// 写法2 结束

// 写法3 开始

function ListItem(props) {
  const value = props.value;
  // return (
  //   // 错啦！你不需要在这里指定key:
  //   <li key={value.toString()}>{value}</li>
  // );
  // todo data-list 自定义属性需要加到真实标签上才生效
  return <li data-list={props.value}>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    //错啦！元素的key应该在这里指定：
    // <ListItem value={number} />
    // 标签实际不会渲染 data-list 无效，但是 key 需要绑定到这里
    <ListItem data-list={number} key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('list')
);

// 写法3 结束
