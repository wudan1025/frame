import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

let root = ReactDOM.createRoot(document.getElementById('hookEffect'));

function Clock() {
  let [date, setDate] = useState(0);
  useEffect(() => {
    // let result = new Date();
    let result = 1;
    setDate(result);
  });

  return (
    <div>
      <h1>Hello, world!</h1>
      <div>{date}</div>
      {/* <FormattedDate date={this.state.date} /> */}
    </div>
  );
}

function App() {
  return (
    <div>
      <Clock></Clock>
    </div>
  );
}

root.render(<App />);
