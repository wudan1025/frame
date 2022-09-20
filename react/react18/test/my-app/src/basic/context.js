/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
let myContext = React.createContext('1');
let myContext2 = React.createContext('2');
function MycontextFn() {
  // 修改值
  let [contextInitVal, setContextInitVal] = useState(1);
  const handleChange = (e) => {
    setContextInitVal('text2');
  };

  return (
    <myContext.Provider value={contextInitVal}>
      <myContext2.Provider value={2}>
        <Layer1></Layer1>
        <button onClick={handleChange}>change</button>
      </myContext2.Provider>
    </myContext.Provider>
  );
}

function Layer1() {
  return (
    <div>
      <div>
        <Layer2></Layer2>
      </div>
    </div>
  );
}

function Layer2() {
  return (
    <myContext.Consumer>
      {(value) => (
        <myContext2.Consumer>
          {(value2) => (
            <span>
              consumer1 :{value} consumer2: {value2}
            </span>
          )}
        </myContext2.Consumer>
      )}
    </myContext.Consumer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MycontextFn></MycontextFn>);
