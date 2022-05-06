import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

let root = ReactDOM.createRoot(document.getElementById('todolistHook'));

function List(props) {
  function getList() {
    // 使用 props 数据更新自动更新
    let result =
     props.list &&
     props.list.map((item, index) => {
        return (
          <span key={index}>
            <li>{item}</li>
            <button onClick={(e) =>props.handleDel(e, index)}>
              删除
            </button>
          </span>
        );
      });

    return result;
  }

  return <ul>{getList()}</ul>;
}

function Wrap() {
  const [list, setList] = useState([]);

  // 箭头函数写法
  let handleAdd = () => {
    setList([...list, inputValue]);
    setInputValue('');
  };

  // 普通函数
  // function handleAdd() {
  //   setList([...list, inputValue]);
  //   setInputValue('');
  // }

  function handleDel(e, idx) {
    let newList = [...list];
    newList.splice(idx, 1);
    setList(newList);
  }

  const [inputValue, setInputValue] = useState('');
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInput}></input>
      <button onClick={handleAdd}>新增</button>
      {/* 封装组件 */}
      <List list={list} handleDel={handleDel}></List>

      {/* 不封装组件 */}
      {/* <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={(e) => handleDel(e, index)}>
              {item}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

root.render(<Wrap />);
