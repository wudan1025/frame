import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

let root = ReactDOM.createRoot(document.getElementById('hookEffect'));

function Clock(props) {
  let [date, setDate] = useState(0);
  const intervalRef = useRef();

  // componentDidMount，
  // componentDidUpdate
  // 和 componentWillUnmount

  // 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕
  // 只要返回组件 DOM 渲染过一次， 就会更新
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    intervalRef.current = timerID;
    console.log('useEffect' + intervalRef.current);
    return () => {
      console.log('clearInterval' + intervalRef.current);
      clearInterval(intervalRef.current);
    };
  });

  function tick() {
    // let result = new Date().toString();
    // setDate(result);

    setDate((prevState) => {
      return prevState + 1;
    });
    console.log('tick Timer' + intervalRef.current);
  }

  if (props.show) {
    // 不返回了依旧再调用 todo
    return (
      <div>
        <h1>Hello, world!</h1>
        <div>{date}</div>
        {/* <FormattedDate date={this.state.date} /> */}
      </div>
    );
  } else {
    // 通过 ref 访问 timer
    console.log('else' + intervalRef.current);
    clearInterval(intervalRef.current);
    return null;
  }
}

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show == true ? <Clock show={show}></Clock> : null}
      {/* <Clock show={show}></Clock> */}
      <button onClick={() => setShow(!show)}>修改</button>
    </div>
  );
}

root.render(<App />);
