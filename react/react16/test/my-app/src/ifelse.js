/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';

function WarningBanner(props) {
  if (!props.warn) {
    // return null 则不渲染
    return null;
  }

  return <div className="warning">warning</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWraning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state, props) => {
      console.log(state);
      console.log(props);
      return { showWraning: !state.showWraning };
    });
    // setState 的回调函数（setState(updater, callback)）
    // this.setState((prevState) => ({
    //   showWraning: !prevState.showWraning,
    // }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWraning}></WarningBanner>
        <button onClick={this.handleToggleClick}>
          {this.state.showWraning ? '隐藏' : '显示'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('ifelse'));
