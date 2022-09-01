/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), count: 0 };
  }

  componentDidMount() {
    // this.timerID = setInterval(() => this.tick(), 1000);
    this.timerID = setTimeout(() => this.tick(), 1000);

    // TODO 18 自己测试是异步
    // document.body.addEventListener('click', () => {
    //   this.setState(
    //     {
    //       date: new Date(),
    //     },
    //     () => {
    //       // react 18 callback 拿到最新值
    //       console.log('settimeout callback : ' + this.state.date);
    //     }
    //   );
    //   //  同步
    //   // 18 自己测试是异步
    //   console.log('settimeout : ' + this.state.date);
    // });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.setState(
    //   {
    //     date: new Date(),
    //   },
    //   () => {
    //     // react 18 callback 拿到最新值
    //     console.log('callback : ' + this.state.date);
    //   }
    // );
    // // react 18 拿到的是 旧值，setstate 异步更新
    // console.log(this.state.date);
    // setTimeout(() => {
    //   this.setState(
    //     {
    //       date: new Date(),
    //     },
    //     () => {
    //       // react 18 callback 拿到最新值
    //       console.log('settimeout callback : ' + this.state.date);
    //     }
    //   );
    //   // settimeout 中变成异步
    //   console.log('settimeout : ' + this.state.date);
    // }, 0);

    // +1
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });

    // +3
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
        {this.state.count}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      {/* <Clock /> */}
      {/* <Clock /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
