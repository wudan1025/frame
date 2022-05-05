import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


let root = ReactDOM.createRoot(
    document.getElementById('hooks')
)



// function Example() {
//     // 声明一个新的叫做 “count” 的 state 变量
//     // React 会在重复渲染时保留这个 state
//     // useState 会返回一对值：当前状态和一个让你更新它的函数
//     // 不会把新的 state 和旧的 state 进行合并。
//     // useState 参数 初始state
//     // 只有在第一次渲染时会被用到
//     const [count, setCount] = useState(0);

//     // React 会在每次渲染后调用副作用函数
//     // 相当于 componentDidMount 和 componentDidUpdate:
//     useEffect(() => {
//         document.title = `you click ${count} times`
//     })

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// root.render(<Example />)



// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//     }

//     useEffect(() => {
//         // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//         return () => {
//             // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//         };
//     });

//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }

// root.render(<FriendStatus />)


function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    );
}

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}

root.render(<useFriendStatus />)