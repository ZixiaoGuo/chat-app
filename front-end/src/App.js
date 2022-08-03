import logo from "./logo.svg";
import "./App.css";
import Bar from "./components/bar/Bar";
import { Fragment } from "react";
import Chat from "./components/chat/Chat";
function App() {
  return (
    <Fragment>
      <Bar />
      <Chat />
    </Fragment>
  );
}

export default App;
