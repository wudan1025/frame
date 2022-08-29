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

  function clickMe2(event, a, b) {
    console.log(a, b);
    console.log(event);
    // event.preventDefault(); // 阻止默认行为
    // event.stopPropagation(); // 阻止冒泡
    console.log('target', event.target); // 指向当前元素，即当前元素触发
    console.log('current target', event.currentTarget); // 指向当前元素，假象！！！

    console.log('nativeEvent', event.nativeEvent);
    console.log('nativeEvent target', event.nativeEvent.target); // 指向当前元素，即当前元素触发
    console.log('nativeEvent current target', event.nativeEvent.currentTarget); // 指向 实际根元素
  }

  function clickMe(event) {
    console.log(event);
    // event.preventDefault(); // 阻止默认行为
    // event.stopPropagation(); // 阻止冒泡
    console.log('target', event.target); // 指向当前元素，即当前元素触发
    console.log('current target', event.currentTarget); // 指向当前元素，假象！！！
  }

  return (
    // 使用bind 无效 TODO ?
    // <div onClick={() => clickMe2.bind(this, 'a', 'b')}>
    // 方法2
    // <div onClick={(e) => clickMe2(e, 'a', 'b')}>
    <span>
      {/* <div onClick={clickMe}> */}
      <div onClick={(e) => clickMe2(e, 'a', 'b')}>
        {list.map((item, key) => {
          return <div key={key}>{item.id}</div>;
        })}
      </div>
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicCondition></BasicCondition>);
