import style from './App.module.css';
import store from './redux/store'

function App() {
  const storeState = store.getState()
  // console.log(storeState)

  function handleClick(e) {
    // console.log(e)
  }

  return (
    <div className={style.App}>
      {storeState.test.value}
      <button onClick={handleClick}>修改store</button>
    </div >
  );
}

export default App;
