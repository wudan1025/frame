import React from "react";
import ReactDOM, { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0, name: 'count' }
    }

    handleClick = (event) => {
        this.setState({ number: this.state.number + 1 })
        console.log(this.state.number) // 0
        this.setState({ number: this.state.number + 1 })
        console.log(this.state.number) // 0
        setTimeout(() => {
            // 17 使用 updateQueue 方式
            // 17 异步中关闭了批量更新 // 2 3
            // 18 使用什么方式
            // 宏任务中的 在微任务中更新？
            // 18 依旧异步 // 1 1
            this.setState({ number: this.state.number + 1 })
            console.log(this.state.number)
            this.setState({ number: this.state.number + 1 })
            console.log(this.state.number)
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

// 按 react 18 渲染
const root = createRoot(document.getElementById('ref')); // createRoot(container!) if you use TypeScript
root.render(<Counter />);

// 按 react 17 渲染
// ReactDOM.render(<Counter />, document.getElementById('ref'));

