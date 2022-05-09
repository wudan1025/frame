import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client';

let root = ReactDOM.createRoot(document.getElementById('useContext'));

const defaultContextValue = {
  username: 'contextName',
};

export const appContext = React.createContext(defaultContextValue);

function Third() {
  const value = useContext(appContext);
  return <div>{value.username}</div>;
}

function Second() {
  return (
    <div>
      <Third />
    </div>
  );
}

root.render(
  <appContext.Provider value={defaultContextValue}>
    <Second></Second>
  </appContext.Provider>
);
