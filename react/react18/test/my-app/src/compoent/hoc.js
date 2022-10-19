/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import HocInner from './hocInner';
export function HocWrapper(props) {
  // this.wrapState = 'hocWrapper';
  let wrapState = 'hocWrapper';
  return <HocInner {...props} wrapState={wrapState}></HocInner>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HocWrapper a="1"></HocWrapper>);
