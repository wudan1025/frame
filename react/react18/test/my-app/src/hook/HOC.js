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
