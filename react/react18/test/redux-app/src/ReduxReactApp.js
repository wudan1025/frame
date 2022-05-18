// 非hooks 写法
// 可以使用在 class 组件 和 function 组件中使用
import style from './App.module.css';
import { connect } from "react-redux";

// 每次修改 会触发 mapStateToProps 函数
const mapStateToProps = (state) => {
    console.log(state)
    return {
        value: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (action) => {
            dispatch(action)
        }
    }
}

function App(props) {
    console.log(props)
    function handleClick(e) {
        const action = {
            type: "changeBefore",
            payload: { value: 'newValue' }
        }
        props.changeValue(action)
    }


    return (
        <div className={style.App}>
            <div>
                <div>store: </div>
                <div>{props.value.test}</div>
            </div>

            <button onClick={handleClick}>修改store</button>
        </div >
    );
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App
)
