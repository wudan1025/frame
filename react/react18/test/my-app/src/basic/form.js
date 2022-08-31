/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function BasicForm() {
  const [inputVal, setInputVal] = useState(0);
  const inputChange = (e) => {
    setInputVal(e.target.value);
  };

  const [textareaVal, settextareaVal] = useState(0);
  const textareaChange = (e) => {
    settextareaVal(e.target.value);
  };

  const [selectVal, setSelectVal] = useState(0);
  const selectChange = (e) => {
    setSelectVal(e.target.value);
  };

  const [checkboxVal, setCheckboxVal] = useState(false);
  const checkboxChage = (e) => {
    setCheckboxVal(!checkboxVal);
  };

  const [radioVal, setRadioVal] = useState(false);
  const radioChage = (e) => {
    console.log(e.target.value);
    setRadioVal(e.target.value);
  };

  return (
    <div>
      {/* input */}
      <input value={inputVal} onChange={inputChange}></input>
      <p>{inputVal}</p>

      {/* textarea */}
      <textarea value={textareaVal} onChange={textareaChange}></textarea>
      <p>{textareaVal}</p>

      {/* select */}
      <select value={selectVal} onChange={selectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <p>{selectVal}</p>

      {/* checkbox */}
      <div>
        <input
          type="checkbox"
          checked={checkboxVal}
          onChange={checkboxChage}
        ></input>
      </div>
      <p>{checkboxVal}</p>

      {/* radio */}
      {/* 有bug */}
      <div>
        <input
          type="radio"
          name="radio"
          value={true}
          checked={radioVal === 'true'}
          onChange={radioChage}
        ></input>
        <input
          type="radio"
          name="radio"
          value={false}
          checked={radioVal === 'false'}
          onChange={radioChage}
        ></input>
      </div>
      <p>{radioVal}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicForm></BasicForm>);
