import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/header";
import Body from "../src/components/body";
import Footer from "../src/components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
