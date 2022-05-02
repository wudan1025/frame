/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';

// 事件例子1 开始
// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('点击');
//   }
//   return (
//     <a href="#" onClick={handleClick}>
//       点击
//     </a>
//   );
// }
// const el = <ActionLink></ActionLink>;

// ReactDOM.render(el, document.getElementById('event'));
// 事件例子1 结束

// 事件例子2 开始
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { istoggleon: true };

//     // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
//     // 解决this绑定方法
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       istoggleon: !prevState.istoggleon,
//     }));
//   }

//   // 解决this绑定方法2
//   // 属性初始化器语法
//   handleClick = () => {
//     // console.log('this is:', this);
//     this.setState((prevState) => ({
//       istoggleon: !prevState.istoggleon,
//     }));
//   };

//   render() {
//     return (
//       // <button onClick={this.handleClick}>
//       //   {this.state.istoggleon ? 'on' : 'off'}
//       // </button>

//       // 解决this绑定方法3
//       <button onClick={(e) => this.handleClick(e)}>Click me</button>
//     );
//   }
// }

// ReactDOM.render(<Toggle></Toggle>, document.getElementById('event'));

// 事件例子2 结束

// 事件例子3 开始
class Popper extends React.Component {
  constructor() {
    super();
    this.state = { name: 'hello' };
  }

  //事件对象e要放在最后
  preventPop(name, e) {
    e.preventDefault();
    console.log(name);
  }

  render() {
    return (
      <div>
        <p> hello</p>
        <a
          href="www.baidu.com"
          onClick={this.preventPop.bind(this, this.state.name)}
        >
          click
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Popper></Popper>, document.getElementById('event'));
