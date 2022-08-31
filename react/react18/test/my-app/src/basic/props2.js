/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
function Add(props) {
  let { setData, data } = props;
  const [inputVal, setInputVal] = useState(0);
  const inputChange = (e) => {
    setInputVal(e.target.value);
  };

  const submit = (e) => {
    // 数组拼接使用 concat
    setData(data.concat({ id: inputVal }));
  };
  return (
    <div>
      <input onChange={inputChange} value={inputVal} />
      <button onClick={submit}>提交</button>
    </div>
  );
}

function List(props) {
  let { data } = props;
  return (
    <ul>
      {data.map((item) => {
        return <li key={item.id}>{item.id}</li>;
      })}
    </ul>
  );
}

function PropsTest() {
  let odata = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const [data, setData] = useState(odata);

  return (
    <div>
      <Add data={data} setData={setData}></Add>
      <List data={data}></List>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PropsTest></PropsTest>);
