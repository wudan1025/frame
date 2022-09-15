/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// class MyComponent extends React.Component {
//   // constructor() {}
//   handleClick() {
//     this.refs.myInput.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref="myInput"></input>
//         <input
//           type="button"
//           value="点击"
//           onClick={this.handleClick.bind(this)}
//         ></input>
//       </div>
//     );
//   }
// }

function RefTest() {
  let name = 'name';

  const upload = (e) => {
    console.log(e.target);
    // 文件
    console.log(e.target.files[0]);
  };

  const inputFile = React.createRef();

  const hanldeInputRef = (e) => {
    // 真实dom
    console.log(inputFile.current);
    // 文件
    console.log(inputFile.current.files[0]);
  };

  return (
    <div>
      <input defaultValue={name}></input>

      <input type="file" ref={inputFile} onChange={upload}></input>

      <button onClick={hanldeInputRef}>获取文件</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('ref'));
root.render(<RefTest></RefTest>);
