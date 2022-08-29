/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

function BasicCondition() {
  // console.log(this); // undefined
  let list = [
    {
      id: 'id-1',
      title: '标题1',
    },
    {
      id: 'id-2',
      title: '标题2',
    },
    {
      id: 'id-3',
      title: '标题3',
    },
  ];

  return (
    <span>
      <div>
        {list.map((item, key) => {
          return <div key={key}>{item.id}</div>;
        })}
      </div>
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicCondition></BasicCondition>);
