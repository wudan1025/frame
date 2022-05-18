# 
> 使用hook  useSelector, useDispatch

> useSelector 获取state

> useDispatch 发送dispatch


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
// hooks 写法
import style from './App.module.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function App(props) {
    // const value = useSelector((state) => state.test);
    const value = useSelector((state) => {
        console.log(state)
        return state.test
    });
    const dispatch = useDispatch();

    function handleClick(e) {
        const action = {
            type: "changeBefore",
            payload: { value: 'newValue' }
        }
        dispatch(action)
    }


    return (
        <div className={style.App}>
            <div>
                <div>store: </div>
                <div>{value}</div>
            </div>

            <button onClick={handleClick}>修改store</button>
        </div >
    );
}

export default App 
```