> render porps
# 1. 用法1

```javascript
function FancyBorder(props) {
    return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>
    );
}

function WelcomeDialog() {
    return (
    <FancyBorder color="blue">
        <h1 className="Dialog-title">
        Welcome
        </h1>
        <p className="Dialog-message">
        Thank you for visiting our spacecraft!
        </p>
    </FancyBorder>
    );
}

let root = ReactDOM.createRoot(
    document.getElementById('example')
)

root.render(<WelcomeDialog />)
```

# 用法2

```javascript
function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

let root = ReactDOM.createRoot(
  document.getElementById('example')
)

root.render(<App />)
```