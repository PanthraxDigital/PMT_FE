import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "../src/components/header";
import MainRoute from "../src/routes/mainRoute";
import Footer from "../src/components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <MainRoute />

        <Footer />
      </div>
    );
  }
}

export default App;
