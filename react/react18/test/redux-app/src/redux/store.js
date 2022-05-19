import { configureStore } from '@reduxjs/toolkit'
import testReducer from './testReducer'

export const store = configureStore({
    reducer: {
        test: testReducer,
        // todo 使用中间件
        // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
        // devTools: true,
    }
})

export default store