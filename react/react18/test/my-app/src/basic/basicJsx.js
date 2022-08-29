/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

function BasicJsx() {
  let ifElse = true;

  // if else 结合 return 使用
  // if (ifElse) {
  //   return <div>true</div>;
  // } else {
  //   return <div>false</div>;
  // }

  return (
    // 错误 jsx 中不允许使用 if else 表达式
    // {
    //   if(this.ifElse) {
    //       <div>true</div>
    //   } else {
    //       <div>false</div>
    //   }
    // }
    <div>
      {/* 三目运算法 */}
      <div>{ifElse === true ? 'true' : false}</div>
      {/* && */}
      <div>{ifElse && 'true'}</div>
    </div>
  );
}

class BasicJsxClss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifElse: true,
    };
  }

  render() {
    const trueJ = <div>trueClass</div>;
    const falseJ = <div>falseClass</div>;

    // if else
    // if (this.state.ifElse) {
    //   return trueJ;
    // } else {
    //   return falseJ;
    // }

    // 三目运算法
    // return <div>{this.state.ifElse ? trueJ : falseJ}</div>;

    // &&
    return <div>{this.state.ifElse === true && trueJ}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicJsx></BasicJsx>);
// root.render(<BasicJsxClss></BasicJsxClss>);
