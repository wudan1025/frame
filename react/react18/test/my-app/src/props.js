/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';

// 例子2 开始
// const ele = <Hello name="R" />;

// function Hello(props) {
//   return <h1>{props.name}</h1>;
// }

// ReactDOM.render(ele, document.getElementById('props'));
// 例子2 结束

// 例子2 开始
// class HelloMessage extends React.Component {
//   render() {
//     return <h1>hello, {this.props.name}</h1>;
//   }
// }

// HelloMessage.defaultProps = {
//   name: 'R',
// };

// const element = <HelloMessage />;

// ReactDOM.render(element, document.getElementById('props'));
// 例子2 结束

// 例子3 开始

class WebSite extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '教程',
      site: 'www.baidu.com',
    };
  }

  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return <h1>this.props.name</h1>;
  }
}

class Link extends React.Component {
  render() {
    return <a href={this.props.site}>{this.props.site}</a>;
  }
}

ReactDOM.render(<WebSite />, document.getElementById('props'));
