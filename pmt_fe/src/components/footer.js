import React from "react";
import bgImage from "../images/background/7.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="main-footer style-two"
        style={{
          backgroundImage: `url("https://farm5.staticflickr.com/4871/45292191704_e139bdf98c_b.jpg")`
        }}
      >
        <div className="auto-container">
          {/* <!-- Widgets Section --> */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* <!-- Big Column --> */}
              <div className="big-column col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  {/* <!-- Footer Column --> */}
                  <div className="footer-column col-md-12 col-sm-6 col-xs-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <a href="index.html">
                          <img src="" alt="" />
                        </a>
                      </div>
                      <div className="text">
                        Over 20 years experience and knowledge of international
                        industrial systems, dedicated to provide the best
                        economical solutions to ourvalued customers. We Won Many
                        Factory Awards and Ceritificates. And we are
                        very consistent with our on time delivery service. This
                        gives us edge over rest of the folk in the market.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Big Column --> */}
              <div className="big-column col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  {/* <!-- Footer Column --> */}
                  <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div className="footer-widget links-widget">
                      <h2>Our Services</h2>
                      <div className="widget-content">
                        <ul className="lisks">
                          <li>
                            <a href="#">Match Plates</a>
                          </li>
                          <li>
                            <a href="#">Manual Fixtures</a>
                          </li>
                          <li>
                            <a href="#">Hydraulic Fixtures</a>
                          </li>
                          <li>
                            <a href="#">Profile CNC Jaws</a>
                          </li>
                          <li>
                            <a href="#">Sheet Metals Parts</a>
                          </li>
                          <li>
                            <a href="#">and many more</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Footer Column --> */}
                  <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div className="footer-widget links-widget">
                      <h2>Quick Links</h2>
                      <div className="widget-content">
                        <div className="row clearfix">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul className="lisks style-two">
                              <li>
                                <a href="#">About Us</a>
                              </li>
                              <li>
                                <a href="#">Services</a>
                              </li>
                              <li>
                                <a href="#">Team</a>
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                        <ul className="social-icon-two">
                          <li className="follow">Follow us :</li>
                          <li>
                            <a href="#">
                              <span className="fa fa-facebook" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright">
              &copy; 2018 Pratap Engineering Technology. Powered by{" "}
              <a href="http://www.panthrax.com">PANTHRAX</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
