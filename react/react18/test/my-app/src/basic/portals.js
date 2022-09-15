/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

import React from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom/client';

function PortalsTest(props) {
  // return (
  //   <div>
  //     <span>测试位置，我在root节点下</span>
  // </div>
  // );

  // 第一个参数（child）是任何可渲染的 React 子元素，
  // 例如一个元素，字符串或 fragment。
  //  第二个参数（container）是一个 DOM 元素。
  // return createPortal(<div>portals 节点</div>, document.body);
  return createPortal(props.children, document.body);
}

function Child() {
  return <div>子元素</div>;
}

function Root() {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div onClick={handleClick}>
      <PortalsTest>
        <Child></Child>
      </PortalsTest>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root></Root>);
