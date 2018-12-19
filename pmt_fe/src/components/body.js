import React from "react";
import MainSlider from "./HomePage/mainSlider";
import MainSlider2 from "./HomePage/mainSlider2";
import CallToAction from "./HomePage/callToAction";
import Services from "./HomePage/services";
import WorkProcess from "./HomePage/workProcess";
import Project from "./HomePage/project";
import ContactInfo from "./HomePage/contactInfo";
import ContactMap from "./HomePage/contactMap";
import About from "./HomePage/about";

class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainSlider />
        <CallToAction />
        {/* <Services /> */}
        <About />
        <WorkProcess />
        <Project />
        <ContactInfo />
        <ContactMap />
      </React.Fragment>
    );
  }
}

export default Body;
