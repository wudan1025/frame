// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { HomePage } from './pages';

const Main = () => <h1>Hello world</h1>;
function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>在React中使用React Router v6 的指南</p>
    </div>
  );
}

function NoMatch() {
  return <div>404</div>;
}

function Profile(props) {
  // todo uesRoter
  return <div>Profile</div>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
          <Link to="/test" style={{ padding: 5 }}>
            test
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />}>
            {/* 内嵌如何展示 */}
            {/* <Route path="/about" element={<About />} /> */}
          </Route>
          <Route path="userId" element={<Profile />}>
            <Route path=":userId" element={<Profile />} />
          </Route>
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" children={<p>Hello!</p>} /> */}

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>

      {/* router5 */}
      {/* <Routes>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/test" render={() => <div>test</div>}></Route>
        <Route render={() => <div>404</div>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
