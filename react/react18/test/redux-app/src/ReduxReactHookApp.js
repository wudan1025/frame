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
