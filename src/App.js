import React from "react";
import Button from "react-bootstrap/Button";
import MyModal from "./MyModal/MyModal";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      </header>
    </div>
  );
}

export default App;
