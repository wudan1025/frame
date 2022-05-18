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
