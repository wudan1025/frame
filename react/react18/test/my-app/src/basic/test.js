/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';

function Hello(props) {
  return <h1>hello world1</h1>;
}

ReactDOM.render(<Hello />, document.getElementById('root'));

const element = <h1>hello,world2</h1>;

// 必须是一个根节点？todo
ReactDOM.render(element, document.getElementById('example'));

// 写法1
function tick1() {
  const element = (
    <div>
      <h1>hello</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('example2'));
}

// setInterval(tick1, 1000);

// 写法2
function Clock(props) {
  return (
    <div>
      <h1>hello world</h1>
      <h2>现在是 {props.data.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick2() {
  ReactDOM.render(
    <Clock data={new Date()} />,
    document.getElementById('example')
  );
}

// 写法3

class Clock3 extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h2>3 现在是 {this.props.data.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function tick3() {
  ReactDOM.render(
    <Clock3 data={new Date()}></Clock3>,
    document.getElementById('example')
  );
}

// setInterval(tick3, 1000);

// setInterval(tick2, 1000);
// 含义 todo
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// React DOM 使用 className 和 htmlFor 来做对应的属性。
// 不需要字符串 todo
var myDivElement = <div className="foo">12</div>;

ReactDOM.render(myDivElement, document.getElementById('jsx'));

ReactDOM.render(
  <div>
    <h1>jsx</h1>
    <p data-myattribute="someValue">somevalue</p>
  </div>,
  document.getElementById('myattribute')
);

var myStyle = {
  fontSize: 100,
  color: '#FF0000',
};

ReactDOM.render(
  <h1 style={myStyle}>
    style
    {/* 注释 */}
  </h1>,
  document.getElementById('style')
);

var arr = [<h1>arr</h1>, <h2>arr2</h2>];

ReactDOM.render(<div>{arr}</div>, document.getElementById('arr'));

// 组件
function HelloMessage(props) {
  return <h1>hello Component</h1>;
}

const HelloMessageEl = <HelloMessage></HelloMessage>;

ReactDOM.render(HelloMessageEl, document.getElementById('HelloMessage'));

// state

class Clock4 extends React.Component {
  // 调用时默认执行
  constructor(props) {
    super(props);
    // 状态
    this.state = { data: new Date() };
  }

  // 声明周期
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      data: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>hello state</h1>
        <h2>{this.state.data.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
ReactDOM.render(<Clock4 />, document.getElementById('state'));
