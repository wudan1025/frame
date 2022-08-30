/*
 * @Date: 2022-08-30 22:29:40
 * @LastEditors: wudan01 wudan01@100tal.com
 * @LastEditTime: 2022-08-30 22:54:38
 * @description: description
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function BasicForm() {

    const [inputVal, setInputVal] = useState(0)
    const inputChange = (e) => {
        setInputVal(e.target.value)
    }

    const [textareaVal, settextareaVal] = useState(0)
    const textareaChange = (e) => {
        settextareaVal(e.target.value)
    }

    const [selectVal, setSelectVal] = useState(0)
    const selectChange = (e) => {
        setSelectVal(e.target.value)
    }

    const [checkboxVal, setCheckboxVal] = useState(false)
    const checkboxChage = (e) => {
        setCheckboxVal(!checkboxVal)
    }

    const [radioVal, setRadioVal] = useState(false)
    const radioChage = (e) => {
        setRadioVal(e.target.value)
    }

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
                <input type="checkbox" checked={checkboxVal} onChange={checkboxChage}></input>
            </div>
            <p>{checkboxVal}</p>

            {/* radio */}
            {/* 有bug */}
            <div>
                <input type="radio" name="radio" onChange={radioChage}>true</input>
                {/* <input type="radio" name="radio" checked={radioVal === false} onChange={radioChage}>false</input> */}
            </div>
            <p>{radioVal}</p>
        </div>
    );
}

class BasicFormClass extends React.Component {
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
root.render(<BasicForm></BasicForm>);
