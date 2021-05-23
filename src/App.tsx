import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import Messages from "./components/Messages/Messages";

const User1 = () => {
  return (
    <div>
      <Messages userId={1} chattingWithId={2} />
    </div>
  );
};

const User2 = () => {
  return (
    <div>
      <Messages userId={2} chattingWithId={1} />
    </div>
  );
};

const Home = () => {
  return <div>This is the chat home page</div>;
};

function App() {
  return (
    <div className="App">
      <h1>Chat App!</h1>
      <BrowserRouter>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/user/1">User 1 Chat</Link>
          </div>
          <div>
            <Link to="/user/2">User 2 Chat</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/1">
            <User1 />
          </Route>
          <Route path="/user/2" exact>
            <User2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
