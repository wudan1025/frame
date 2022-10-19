/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Mouse(props) {
  let [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinate({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
      {props.render(coordinate)}
    </div>
  );
}

const App = (props) => (
  <div style={{ height: '500px' }}>
    <p>{props.a}</p>
    <Mouse
      render={({ x, y }) => (
        <h1>
          mouse position is ({x},{y})
        </h1>
      )}
    />
  </div>
);

function RenderApp() {
  return <App a={2}></App>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderApp></RenderApp>);
