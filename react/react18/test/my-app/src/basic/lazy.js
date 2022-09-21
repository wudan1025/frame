/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const MycontextFn = lazy(() => import('./context'));
// const MycontextFn = React.lazy(() => import('./ContextDemo'));
function Mylazy() {
  return (
    <div>
      <Suspense>
        <MycontextFn></MycontextFn>
      </Suspense>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mylazy></Mylazy>);
