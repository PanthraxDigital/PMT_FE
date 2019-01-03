import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "../src/components/header";
import MainRoute from "../src/routes/mainRoute";
import Footer from "../src/components/footer";
var menuSelectedVal;
class App extends Component {
  constructor(props) {
    super(props);
    this.menuSelectedHighLightFn = this.menuSelectedHighLightFn.bind(this);
  }

  menuSelectedHighLightFn(menuHighLighted) {
    menuSelectedVal = menuHighLighted;
  }

  render() {
    return (
      <div className="App">
        <Header menuHighLighted={menuSelectedVal} />
        <MainRoute menuSelectedHighLightFn={this.menuSelectedHighLightFn} />

        <Footer />
      </div>
    );
  }
}

export default App;
