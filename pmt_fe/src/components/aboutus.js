import React from "react";
import WorkProcess from "./HomePage/workProcess";

class AboutUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {/* <!--Page Title--> */}
        <section
          className="page-title"
          style={{
            backgroundImage: `url("https://farm5.staticflickr.com/4853/45966874932_a373ccfb5d_n.jpg")`
          }}
        >
          <div className="auto-container">
            <h1>About Us</h1>
            <div className="text">Its all about PMT</div>
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
              <h2>About PMT</h2>
            </div>
            <div className="row clearfix">
              <div className="content-column col-md-6 col-sm-12 col-xs-12">
                <div className="text" style={{ textAlign: "justify" }}>
                  <p>
                    <strong>PRATAP MANUFACTURING TECHNOLOGY PVT. LTD </strong>
                    was established in 2018, by Mr. Pratap Singh Jadon & Mr.
                    VisheshPratapSingh. <br />
                    <br />
                    <strong>Mr. Pratap Singh Jadon </strong>is an Mechanical
                    Engineer having 19 years. of experience in Tool Room &
                    Manufacturing Engineering, worked with various companies
                    Like JBM, Rasandik, Sigma Electric Manufacturing.
                    <br /> Before starting this firm, Pratap Singh Jadon was
                    working in Sigma Electric manufacturing corporation pvt ltd
                    as an AGM Tool room & Manufacturing Engineer & was heading
                    Tool room & ME department. <br />
                    <br />
                    <strong>Mr. Vishesh Pratap Singh </strong>is an Mechanical
                    Engineer & having 22 years. of Experience in Sand casting
                    Foundry (Non ferrous). <br />
                    Before starting this firm, Vishesh Pratap Singh was working
                    in Sigma Electric manufacturing corporation pvt ltd. as Sr.
                    Manager Foundry (Non Ferrous) .
                  </p>
                  {/* <p>
                    We partner with over 450 amazing seds projects worldwide,
                    and have given over million in cash & product grants to
                    other groups since 2016 our own dynamic suite.
                  </p> */}
                </div>
                <div className="row clearfix">
                  <div className="column col-md-6 col-sm-6 col-xs-12">
                    <ul className="list-style-one">
                      <li>
                        <strong>Certified Mechanics</strong>
                      </li>
                      <li>
                        <strong>Affordable prices</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="column col-md-6 col-sm-6 col-xs-12">
                    <ul className="list-style-one">
                      <li>
                        <strong>24/7 availality</strong>
                      </li>
                      <li>
                        <strong>No hidden cost</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="image-column col-md-6 col-sm-12 col-xs-12">
                <div className="image">
                  <img
                    src="https://farm5.staticflickr.com/4870/45292309084_f2a572be31.jpg"
                    alt=""
                  />
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
                          src="https://farm5.staticflickr.com/4865/45292309144_bd748628d0_m.jpg"
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
                          src="https://farm5.staticflickr.com/4882/45292308994_fc6cdc02b7_m.jpg"
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
              style={{
                backgroundImage: `url("https://farm5.staticflickr.com/4844/44201093460_6267d18fd3.jpg")`
              }}
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
                    applications based on specially developed technology. We are
                    ready to build as per the client dynamic needs.
                    Infrastructure related installation projects, general repair
                    & industrial and machinery.
                  </p>
                  <p>
                    We only source material from tried & trusted suppliers that
                    meet our exacting standards of quality control. Our team
                    up-to-date, sustainable custom manufacturing solutions will
                    give you excellent solution.{" "}
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
