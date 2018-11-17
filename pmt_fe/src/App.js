import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/header";
import Footer from "../src/components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
