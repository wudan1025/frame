/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';

class MyComponent extends React.Component {
  // constructor() {}
  handleClick() {
    this.refs.myInput.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref="myInput"></input>
        <input
          type="button"
          value="点击"
          onClick={this.handleClick.bind(this)}
        ></input>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('ref'));
