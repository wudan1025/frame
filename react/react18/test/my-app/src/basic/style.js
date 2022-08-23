/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

function TestStyle() {
  let style1 = {
    fontWeight: 'bold',
    fontSize: '30px',
  };
  let rawhtml = {
    __html: '<span style="font-size:20px">12313123</span>',
  };
  return (
    // TODO 每个组件否知只能有一个根节点
    <div>
      <div style={style1}>TestStyle</div>
      <div style={{ fontSize: '40px' }}>fontsize 40px</div>
      <div>
        <p dangerouslySetInnerHTML={rawhtml}></p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TestStyle></TestStyle>);
