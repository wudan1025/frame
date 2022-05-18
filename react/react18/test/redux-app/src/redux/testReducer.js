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