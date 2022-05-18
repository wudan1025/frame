> 直接在组件中引入并且创建

> index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
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

> 使用组件
```javascript
import style from './App.module.css';
import store from './redux/store'
import React, { useState } from 'react';

function App() {
  const storeState = store.getState()
  store.subscribe(handleStateChange);
  // console.log(storeState)

  const [value, setValue] = useState(storeState.test)

  function handleStateChange() {
    const storeState = store.getState();
    setValue(storeState.test)

  }
  function handleClick(e) {
    const action = {
      type: "changeBefore",
      payload: { value: 'newValue' }
    }
    store.dispatch(action);
  }


  return (
    <div className={style.App}>
      <div>
        <div>useEffect: </div>
        <div>{value}</div>
      </div>
      <div>
        <div>store: </div>
        <div>{storeState.test}</div>
      </div>

      <button onClick={handleClick}>修改store</button>
    </div >
  );
}

export default App;

```