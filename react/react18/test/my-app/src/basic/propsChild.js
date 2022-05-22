/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React from 'react';
// client.js / index.js 版本差异
import ReactDOM, { render } from 'react-dom';



// 例子3 开始

class Father extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


ReactDOM.render(<Father><div>这是子组件</div></Father>, document.getElementById('props'));
