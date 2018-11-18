import React from "react";
import bgImage from "../images/background/8.jpg";
import bgImage1 from "../images/main-slider/image-1-1.jpg";
import bgImage2 from "../images/main-slider/image-6-1.jpg";

import About from "./HomePage/about";
import WorkProcess from "./HomePage/workProcess";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        {/* <!--Page Title--> */}
        <section
          className="page-title"
          style={{ backgroundImage: `url(${bgImage2})` }}
        >
          <div className="auto-container">
            <h1>About Us</h1>
            <div className="text">History to our industry</div>
          </div>
          {/* <!--Page Info--> */}
          <div className="page-info">
            <div className="auto-container clearfix">
              <div className="pull-left">
                <ul className="social-icon-one">
                  <li className="share">Share on :</li>
                  <li>
                    <a className="fa fa-facebook-f" href="#" />
                  </li>
                  <li>
                    <a className="fa fa-twitter" href="#" />
                  </li>
                  <li>
                    <a className="fa fa-google-plus" href="#" />
                  </li>
                  <li>
                    <a className="fa fa-pinterest-p" href="#" />
                  </li>
                </ul>
              </div>
              <div className="pull-right">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Page Title--> */}

        {/* <!--About Section--> */}
        <section className="about-section-two">
          <div className="auto-container">
            {/* <!--Sec Title--> */}
            <div className="sec-title">
              <h2>About industry</h2>
            </div>
            <div className="row clearfix">
              <div className="content-column col-md-6 col-sm-12 col-xs-12">
                <div className="text">
                  <p>
                    When you give to Our Industry, know your donation is making
                    a difference whether you are supporting our signature
                    Programs or our carefully curated list of gifts that
                    professional. Over 24 years experience and knowledge
                    international standards, technologicaly changes and
                    industrial systems.
                  </p>
                  <p>
                    We partner with over 450 amazing seds projects worldwide,
                    and have given over million in cash & product grants to
                    other groups since 2016 our own dynamic suite.
                  </p>
                </div>
                <div className="row clearfix">
                  <div className="column col-md-6 col-sm-6 col-xs-12">
                    <ul className="list-style-one">
                      <li>Certified Mechanics</li>
                      <li>Affordable prices</li>
                    </ul>
                  </div>
                  <div className="column col-md-6 col-sm-6 col-xs-12">
                    <ul className="list-style-one">
                      <li>24/7 availality</li>
                      <li>No hidden cost</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="image-column col-md-6 col-sm-12 col-xs-12">
                <div className="image">
                  <img src={require("../images/resource/about-3.jpg")} alt="" />
                </div>
              </div>
            </div>

            <div className="row clearfix">
              {/* <!--About Block--> */}
              <div className="about-block-two col-md-6 col-sm-12 col-xs-12">
                <div className="inner-box">
                  <div className="row clearfix">
                    {/* <!--Image Column--> */}
                    <div className="image-column col-md-6 col-sm-6 col-xs-12">
                      <div className="image">
                        <img
                          src={require("../images/resource/about-1.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* <!--Content Column--> */}
                    <div className="content-column col-md-6 col-sm-6 col-xs-12">
                      <h3>
                        <a href="#">Our Mission</a>
                      </h3>
                      <div className="text">
                        We have facility to produce advance work various
                        industrial applications based on specially developed
                        tech- nology are also ready.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--About Block--> */}
              <div className="about-block-two col-md-6 col-sm-12 col-xs-12">
                <div className="inner-box">
                  <div className="row clearfix">
                    {/* <!--Image Column--> */}
                    <div className="image-column col-md-6 col-sm-6 col-xs-12">
                      <div className="image">
                        <img
                          src={require("../images/resource/about-2.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* <!--Content Column--> */}
                    <div className="content-column col-md-6 col-sm-6 col-xs-12">
                      <h3>
                        <a href="#">Our Vision</a>
                      </h3>
                      <div className="text">
                        Complete account of work system, andexpound the actual
                        teachings of the truth must explain to you how this
                        mistaken idea praising.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End About Section--> */}

        {/* <!--Fluid Section One--> */}
        <section className="fluid-section-one">
          <div className="outer-container clearfix">
            {/* <!--Image Column--> */}
            <div
              className="image-column"
              // style={{ backgroundImage: `url(${bgImage1}` }}
              style={{ backgroundImage: `url(${bgImage1})` }}
            >
              <figure className="image-box">
                {/* <img
                  src={require("../images/main-slider/image-1-1.jpg")}
                  alt=""
                /> */}
              </figure>
            </div>
            {/* <!--Content Column--> */}
            <div className="content-column">
              <div className="inner-box">
                <div className="sec-title">
                  <h2>Why Choose Us</h2>
                </div>
                <div className="text">
                  <p>
                    We have facility to produce advance work various industrial
                    applications based on specially developed technol-ogy. We
                    are also ready to developement by according to users
                    changing needs. Infrastructure related installation
                    projects. General repair & industrial and machinery.
                  </p>
                  <p>
                    We only source material from tried & trusted suppliers that
                    meet our exacting standards of quality control. Our team
                    up-to-date, sustainable custom manufacturing solutions.{" "}
                  </p>
                </div>
                <ul className="choose-info">
                  <li>
                    <span className="icon flaticon-microscope" />
                    Advanced <br /> Technology
                  </li>
                  <li>
                    <span class="icon flaticon-time-passing" />
                    Delivery <br /> On Time
                  </li>
                  <li>
                    <span class="icon flaticon-engineer" />
                    Certified <br /> Engineers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Fluid Section One--> */}

        <WorkProcess />
      </div>
    );
  }
}

export default AboutUs;
