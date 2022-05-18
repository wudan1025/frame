# 
> 不使用hook 

> 可以使用在 class 组件 和 function 组件中使用 


# 代码
> index.js

> 使用 Provider 全局注入 store
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReduxReactApp from './ReduxReactApp'
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxReactApp></ReduxReactApp>
    </Provider>
  </React.StrictMode>
);
```

> store.js
```javascript
import { configureStore } from '@reduxjs/toolkit'
import testReducer from './testReducer'

export const store = configureStore({
    reducer: {
        test: testReducer
    }
})


export default store
```

> testReducer
```javascript
// 对象
// const defaultState = {
//     value: 'before'
// }

// 写成字符串
const defaultState = '123'

export default (state = defaultState, action) => {
    // 在这里修改 state
    switch (action.type) {
        case 'changeBefore':
            // return { ...state, value: action.payload.value };
            return action.payload.value
        default:
            return state
    }
}
```

> 组件
```
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

export default App = connect(mapStateToProps, mapDispatchToProps)(App)
```