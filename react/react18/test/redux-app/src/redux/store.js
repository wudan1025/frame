// import { createStore } from 'redux'

import { configureStore } from '@reduxjs/toolkit'
import testReducer from './testReducer'

export const store = configureStore({
    reducer: {
        test: testReducer
    }
})


export default store