import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- About Section --> */}
        <section class="about-section grey-bg">
          <div class="auto-container">
            {/* <!-- Sec Title --> */}
            <div class="sec-title">
              <h2>About PMT</h2>
            </div>
            <div class="row clearfix">
              {/* <!-- Content Column --> */}
              <div class="content-column col-md-6 col-sm-12 col-xs-12">
                <div class="text">
                  PRATAP MANUFACTURING TECHNOLOGY PVT. LTD was established in
                  2018, by Mr. Pratap Singh Jadon & Mr. VisheshPratapSingh. We
                  are specialized in providing high quality, reliable, accurate
                  and durable products for our customers.{" "}
                  <Link to="/aboutus">Know more</Link>
                </div>
                <div class="image">
                  <img
                    src="https://farm5.staticflickr.com/4870/45292309084_f2a572be31.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* <!-- Blocks Column --> */}
              <div class="blocks-column col-md-6 col-sm-12 col-xs-12">
                <div class="row clearfix">
                  {/* <!-- About Block --> */}
                  <div class="about-block col-md-6 col-sm-6 col-xs-12">
                    <div class="inner-box">
                      <div class="image">
                        <a href="about.html">
                          <img
                            src="https://farm5.staticflickr.com/4865/45292309144_bd748628d0_m.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="lower-box">
                        <h3>
                          <a href="about.html">Our Mission</a>
                        </h3>
                        <div class="text">
                          - To become leader in Manufacturing Dies, Molds, Jigs
                          & Fixtures. <br />
                          - First time right and On time delivery of products.
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- About Block --> */}
                  <div class="about-block col-md-6 col-sm-6 col-xs-12">
                    <div class="inner-box">
                      <div class="image">
                        <a href="about.html">
                          <img
                            src="https://farm5.staticflickr.com/4882/45292308994_fc6cdc02b7_m.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="lower-box">
                        <h3>
                          <a href="about.html">Our Vision</a>
                        </h3>
                        <div class="text">
                          To bring the culture of innovation and quality in
                          manufacturing to satisfy our customer with timely and
                          first time right products.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}
      </div>
    );
  }
}

export default About;
