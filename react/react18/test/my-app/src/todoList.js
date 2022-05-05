import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


let root = ReactDOM.createRoot(
    document.getElementById('todoList')
)


class List extends Component {
    constructor(props) {
        super()

        // state 浅拷贝
        // this.state = {
        //     list: props.list,
        //     handleDel: props.handleDel
        // }
    }



    getList = () => {
        // 使用 props 数据更新自动更新
        let result = this.props.list && this.props.list.map((item, index) => {
            return (
                <span key={index}>
                    <li >{item}</li>
                    <button onClick={(e) => this.props.handleDel(e, index)}>删除</button>
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

        // bidn
    }

    handleAdd = () => {
        // 生效 todo
        // let newList = this.state.list
        // this.state.list.push(this.state.addValue)
        // console.log(newList)

        // this.setState((state, props) => {
        //     return {
        //         addValue: '',
        //         list: newList,
        //         // error todo
        //         // list: this.state.list.push(this.state.addValue)

        //     }
        // })

        // 无效 todo
        this.setState({
            addValue: '',
            // todo [..arr] 深拷贝 or 浅拷贝
            list: [...this.state.list, this.state.addValue]
        })

        // // 无效 todo
        // this.setState((state, props) => {
        //     return {
        //         addValue: '',
        //         // todo [..arr] 深拷贝 or 浅拷贝
        //         list: [...this.state.list, this.state.addValue]
        //     }
        // })

        // console.log(this.state.list)

        // setTimeout(() => {
        //     console.log(this.state.list)
        // }, 1000);
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

        // 生效
        // let newList = this.state.list
        // this.state.list.splice(idx, 1)

        // 不生效todo
        let newList = [...this.state.list]
        newList.splice(idx, 1)


        this.setState(() => {
            return {
                list: newList
            }
        })

        // this.setState({
        //     list: newList
        // })


    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.addValue} onChange={this.handleInput}></input>
                <button onClick={this.handleAdd}>新增</button>
                {/* 封装组件 */}
                <List list={this.state.list} handleDel={this.handleDel}></List>

                {/* 不封装组件 */}
                {/* <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={(e) => this.handleDel(e, index)}>{item}</li>
                        })
                    }
                </ul> */}
            </div>
        )

    }
}



root.render(<Wrap />)
