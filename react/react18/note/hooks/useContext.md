# 定义
> 跨组件传递信息，减少层级嵌套

# 使用
### 基础使用
> React.createContext 创建 context

> <name.Provider value={}> 注入组件

>  useContext(name) 使用

```
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

```

### 可变context
> https://zh-hans.reactjs.org/docs/context.html#dynamic-context

### 多个context
> https://zh-hans.reactjs.org/docs/context.html#consuming-multiple-contexts