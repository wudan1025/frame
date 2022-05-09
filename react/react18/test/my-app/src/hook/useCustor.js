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
