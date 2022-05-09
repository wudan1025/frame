# 定义
> 自定义 Hook 是一个函数，

> 以 “use” 开头

> 函数内部可以调用其他的 Hook。

> 解决两个函数之间共享逻辑

> 两个组件相同的hook 不会共享state

### eg
> 没有用hook 
```
import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';

let root = ReactDOM.createRoot(document.getElementById('HOC'));

const defaultContextValue = {
  username: 'contextName',
};

export const appContext = React.createContext(defaultContextValue);

const Robot = (props) => {
  let { name, addToCart } = props;
  return (
    <div>
      <img alt="robot" />
      <p>作者：{name.username}</p>
      <button onClick={addToCart}>click</button>
    </div>
  );
};

const AddToCart = (props) => {
  let { Child } = props;
  const value = useContext(appContext);
  function addToCart() {
    console.log('addToCart');
  }
  return <Child name={value} addToCart={addToCart}></Child>;
};

root.render(
  <appContext.Provider value={defaultContextValue}>
    <AddToCart Child={Robot} />
  </appContext.Provider>
);

```

> 用了自定义hook
```
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';

let root = ReactDOM.createRoot(document.getElementById('useCustor'));

const defaultContextValue = {
  username: 'contextName',
};

export const appContext = React.createContext(defaultContextValue);

const Robot = () => {
  const name = useContext(appContext);
  const addToCart = useAddToCart();
  return (
    <div>
      <img alt="robot" />
      <p>作者：{name.username}</p>
      <button onClick={addToCart}>click</button>
    </div>
  );
};

// 使用自定义hooc重写
const useAddToCart = () => {
  function addToCart() {
    console.log('addToCart');
  }
  return addToCart;
};

root.render(
  <appContext.Provider value={defaultContextValue}>
    <Robot></Robot>
  </appContext.Provider>
);

```