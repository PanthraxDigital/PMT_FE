import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="main-footer style-two"
        style={{ backgroundImage: "url(images/background/7.jpg)" }}
      >
        <div className="auto-container">
          {/* <!-- Widgets Section --> */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* <!-- Big Column --> */}
              <div className="big-column col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  {/* <!-- Footer Column --> */}
                  <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <a href="index.html">
                          <img src="images/logo-2.png" alt="" />
                        </a>
                      </div>
                      <div className="text">
                        Over 20 years experience and knowledge of international
                        industrial systems, dedicated to provide the best
                        economical solutions to ourvalued customers. We Won Many
                        Factory Awards and Ceritifide Since 2005
                      </div>
                    </div>
                  </div>

                  {/* <!-- Footer Column --> */}
                  <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                    <div className="footer-widget news-widget">
                      <h2>Latest News</h2>
                      <div className="widget-content">
                        <article className="post">
                          <figure className="post-thumb">
                            <a href="news-detail.html">
                              <img
                                src="images/resource/news-thumb-1.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              We have a great work environment in industry.
                            </a>
                          </div>
                          <div className="post-info">November 20, 2017</div>
                        </article>

                        <article className="post">
                          <figure className="post-thumb">
                            <a href="news-detail.html">
                              <img
                                src="images/resource/news-thumb-2.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              Contemporary Technology for Mystic Vehicle
                            </a>
                          </div>
                          <div className="post-info">December 20, 2017</div>
                        </article>
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
                      <h2>Our Solutions</h2>
                      <div className="widget-content">
                        <ul className="lisks">
                          <li>
                            <a href="#">Energy & Power Enginerring</a>
                          </li>
                          <li>
                            <a href="#">Oil & Gas Enginerring</a>
                          </li>
                          <li>
                            <a href="#">Civil Enginerring</a>
                          </li>
                          <li>
                            <a href="#">Agriculture Engineering</a>
                          </li>
                          <li>
                            <a href="#">Chemical Engineering</a>
                          </li>
                          <li>
                            <a href="#">Mechanical Engineering</a>
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
                                <a href="#">Career</a>
                              </li>
                              <li>
                                <a href="#">Get Quote</a>
                              </li>
                              <li>
                                <a href="#">News</a>
                              </li>
                              <li>
                                <a href="#">Faq</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul className="lisks style-two">
                              <li>
                                <a href="#">Services</a>
                              </li>
                              <li>
                                <a href="#">Team</a>
                              </li>
                              <li>
                                <a href="#">Shop</a>
                              </li>
                              <li>
                                <a href="#">Blogs</a>
                              </li>
                              <li>
                                <a href="#">Contact</a>
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
                          <li>
                            <a href="#">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-pinterest-p" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-dribbble" />
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
              <a href="http://www.panthrax.com">PDA</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
