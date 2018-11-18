import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Main Header --> */}
        <header className="main-header">
          {/* <!-- Header Top --> */}
          <div className="header-top">
            <div className="auto-container">
              <div className="inner-container clearfix">
                <div className="top-left">
                  <ul className="clearfix">
                    <li>Turning big ideas into great products</li>
                    <li>
                      <a href="#">
                        <span className="icon fa fa-globe" />
                        Jaipur, Rajasthan, IN
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon fa fa-volume-control-phone" /> +91
                        97852 02444 | +91 77920 51120
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="top-right clearfix">
                  <ul className="social-icon-one">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Header-Upper --> */}
          <div className="header-upper">
            <div className="auto-container">
              <div className="clearfix">
                <div className="pull-left logo-outer">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src={require("../images/logo2.png")}
                        alt=""
                        title=""
                        style={{width:"65%"}}
                      />
                    </a>
                  </div>
                </div>

                <div className="pull-right upper-right clearfix">
                  {/* <!-- Info Box --> */}
                  <div className="upper-column info-box">
                    <div className="icon-box">
                      <span className="flaticon-stamp-1" />
                    </div>
                    <ul>
                      <li>
                        <strong>Certified Company</strong>
                      </li>
                      <li>ISO 9001: 2010</li>
                    </ul>
                  </div>

                  {/* <!-- Info Box --> */}
                  <div className="upper-column info-box">
                    <div className="icon-box">
                      <span className="flaticon-trophy-2" />
                    </div>
                    <ul>
                      <li>
                        <strong>Great Industrial</strong>
                      </li>
                      <li>Solution Provider</li>
                    </ul>
                  </div>

                  {/* <!-- Info Box --> */}
                  <div className="upper-column info-box">
                    <a href="contact.html" className="order-btn theme-btn">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Header Upper --> */}

          {/* <!-- Header Lower --> */}
          <div className="header-lower">
            <div className="auto-container">
              <div className="nav-outer clearfix">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu">
                  <div className="navbar-header">
                    {/* <!-- Toggle Button --> */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="dropdown">
                        <a href="solutions.html">Solutions</a>
                        <div className="hideElement">
                          <ul>
                            <li>
                              <a href="solutions.html">Solutions</a>
                            </li>
                            <li>
                              <a href="chemical-eng.html">
                                Chemical Engineering
                              </a>
                            </li>
                            <li>
                              <a href="power-eng.html">
                                Energy & Power Engineering
                              </a>
                            </li>
                            <li>
                              <a href="gas-eng.html">Oil & Gas Engineering</a>
                            </li>
                            <li>
                              <a href="civil-eng.html">Civil Engineering</a>
                            </li>
                            <li>
                              <a href="agriculture-eng.html">
                                Agriculture Engineering
                              </a>
                            </li>
                            <li>
                              <a href="solutions-detail.html">
                                Mechanical Engineering
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="projects.html">Projects</a>
                        <div className="hideElement">
                          <ul>
                            <li>
                              <a href="projects.html">Our projects</a>
                            </li>
                            <li>
                              <a href="projects-detail.html">
                                Projects Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <div className="hideElement">
                        <li className="dropdown">
                          <a href="#">News</a>
                          <ul className="hideElement">
                            <li>
                              <a href="news.html">News Grid View</a>
                            </li>
                            <li>
                              <a href="news-list.html">News List View</a>
                            </li>
                            <li>
                              <a href="news-classNameic.html">News classNameic View</a>
                            </li>
                            <li>
                              <a href="news-detail.html">News Details</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <div className="hideElement">
                        <li className="dropdown" className="hideElement">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-single.html">Item Details</a>
                            </li>
                            <li>
                              <a href="shoping-cart.html">Cart Page</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout Page</a>
                            </li>
                            <li>
                              <a href="login.html">Login Page</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* <!-- Main Menu End --> */}
                <div className="outer-box hideElement">
                  {/* <!-- Search Box --> */}
                  <div className="dropdown dropdown-outer">
                    <button
                      className="search-box-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="fa fa-search" />
                    </button>
                    <ul
                      className="dropdown-menu pull-right search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <li className="panel-outer">
                        <div className="form-container">
                          <form method="post" action="blog.html">
                            <div className="form-group">
                              <input
                                type="search"
                                name="field-name"
                                value=""
                                placeholder="Search Here"
                                required=""
                              />
                              <button type="submit" className="search-btn">
                                <span className="fa fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Header Lower --> */}

          {/* <!-- Sticky Header --> */}
          <div className="sticky-header">
            <div className="auto-container clearfix">
              {/* <!-- Logo --> */}
              <div className="logo pull-left">
                <a href="index.html" className="img-responsive">
                  <img src="images/logo-small.png" alt="" title="" />
                </a>
              </div>

              {/* <!-- Right Col --> */}
              <div className="right-col pull-right">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu">
                  <div className="navbar-header">
                    {/* <!-- Toggle Button --> */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="#">Home</a>
                    
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Solutions</a>
                        <div className="hideElement">
                          <ul>
                            <li>
                              <a href="solutions.html">Solutions</a>
                            </li>
                            <li>
                              <a href="chemical-eng.html">
                                Chemical Engineering
                              </a>
                            </li>
                            <li>
                              <a href="power-eng.html">
                                Energy & Power Engineering
                              </a>
                            </li>
                            <li>
                              <a href="gas-eng.html">Oil & Gas Engineering</a>
                            </li>
                            <li>
                              <a href="civil-eng.html">Civil Engineering</a>
                            </li>
                            <li>
                              <a href="agriculture-eng.html">
                                Agriculture Engineering
                              </a>
                            </li>
                            <li>
                              <a href="solutions-detail.html">
                                Mechanical Engineering
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">Projects</a>
                        <div className="hideElement">
                          <ul>
                            <li>
                              <a href="projects.html">Our projects</a>
                            </li>
                            <li>
                              <a href="projects-detail.html">
                                Projects Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown">
                        <a href="#">News</a>
                        <div className="hideElement">
                          <ul>
                            <li>
                              <a href="news.html">News Grid View</a>
                            </li>
                            <li>
                              <a href="news-list.html">News List View</a>
                            </li>
                            <li>
                              <a href="news-classNameic.html">News classNameic View</a>
                            </li>
                            <li>
                              <a href="news-detail.html">News Details</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <div className="hideElement">
                        <li className="dropdown">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-single.html">Item Details</a>
                            </li>
                            <li>
                              <a href="shoping-cart.html">Cart Page</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout Page</a>
                            </li>
                            <li>
                              <a href="login.html">Login Page</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* <!-- Main Menu End --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Sticky Header --> */}
        </header>
        {/* <!-- End Main Header --> */}
      </div>
    );
  }
}

export default Header;
