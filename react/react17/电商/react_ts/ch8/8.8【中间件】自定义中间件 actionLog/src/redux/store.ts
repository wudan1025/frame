import { createStore, combineReducers, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));


// 中间件公式
// const middleware = (store) => (next) => (action) => { }

// 简化版本middleware
// const applyMiddleware = function (middleware) {
//     let next = store.dispath;
//     // 柯里化传递参数
//     // 截取action 对某些action 做操作
//     store.dispath = middleware(store)(next)
// }

export type RootState = ReturnType<typeof store.getState>

export default store;