import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


let root = ReactDOM.createRoot(
    document.getElementById('todoList')
)


class List extends Component {
    constructor(props) {
        super()
        this.state = {
            list: props.list,
            handleDel: props.handleDel
        }
    }



    getList = () => {
        let result = this.state.list && this.state.list.map((item, index) => {
            return (
                <span key={index}>
                    <li >{item}</li>
                    <button onClick={(e) => this.state.handleDel(e, index)}>删除</button>
                </span>

            )
        })

        return result
    }


    render() {
        // return (<div>123</div>)
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }
}


class Wrap extends Component {
    constructor() {
        super()
        this.state = {
            list: [1, 2],
            addValue: ''
        }
    }

    handleAdd = () => {
        let newList = this.state.list
        this.state.list.push(this.state.addValue)
        console.log(newList)
        this.setState((state, props) => {
            return {
                addValue: '',
                list: newList,
                // error todo
                // list: this.state.list.push(this.state.addValue)

            }
        })

        console.log(this.state.list)

        setTimeout(() => {
            console.log(this.state.list)
        }, 1000);
    }

    handleInput = (e) => {
        this.setState(() => {
            return {
                addValue: e.target.value
            }
        })
    }

    handleDel = (e, idx) => {
        // console.log('handleDel')
        // console.log(idx)

        let newList = this.state.list
        this.state.list.splice(idx, 1)

        this.setState(() => {
            return {
                list: newList
            }
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.addValue} onChange={this.handleInput}></input>
                <button onClick={this.handleAdd}>新增</button>
                <List list={this.state.list} handleDel={this.handleDel}></List>
            </div>
        )

    }
}



root.render(<Wrap />)
