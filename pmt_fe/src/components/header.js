import React from "react";

class Header extends React.Component {
  render() {
    return (
      // <!-- Main Header / Header Stye Two-->
      <header className="main-header header-style-two">
        {/* <!--Header Top--> */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="top-left">
                <ul className="clearfix">
                  <li>Turning big ideas into great products</li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-thumbs-o-up" /> Certified ISO
                      9001: 2010
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-globe" /> Mountain Drive,
                      London, UK
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-volume-control-phone" /> +44
                      567 890123
                    </a>
                  </li>
                </ul>
              </div>
              <div className="top-right clearfix">
                <ul className="social-icon-two">
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

        {/* <!--Header-Upper--> */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="pull-left logo-outer">
                <div className="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="" title="" />
                  </a>
                </div>
              </div>

              <div className="nav-outer clearfix">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu">
                  <div className="navbar-header">
                    {/* <!-- Toggle Button -->  */}
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
                        <ul>
                          <li>
                            <a href="index.html">Homepage One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Homepage Two</a>
                          </li>
                          <li className="dropdown">
                            <a href="#">Header Styles</a>
                            <ul>
                              <li>
                                <a href="index.html">Header Style One</a>
                              </li>
                              <li>
                                <a href="index-2.html">Header Style Two</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Solutions</a>
                        <ul>
                          <li>
                            <a href="solutions.html">Solutions</a>
                          </li>
                          <li>
                            <a href="chemical-eng.html">Chemical Engineering</a>
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
                      </li>
                      <li className="dropdown">
                        <a href="#">Projects</a>
                        <ul>
                          <li>
                            <a href="projects.html">Our projects</a>
                          </li>
                          <li>
                            <a href="projects-detail.html">Projects Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">News</a>
                        <ul>
                          <li>
                            <a href="news.html">News Grid View</a>
                          </li>
                          <li>
                            <a href="news-list.html">News List View</a>
                          </li>
                          <li>
                            <a href="news-classNameic.html">
                              News classNameic View
                            </a>
                          </li>
                          <li>
                            <a href="news-detail.html">News Details</a>
                          </li>
                        </ul>
                      </li>
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
                            <a href="login.html">Login</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </nav>

                {/* <!-- Main Menu End--> */}
                <div className="outer-box">
                  {/* <!--Search Box--> */}
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
                  <a href="contact.html" className="theme-btn btn-style-four">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}

        {/* <!--Sticky Header--> */}
        <div className="sticky-header">
          <div className="auto-container clearfix">
            {/* <!--Logo--> */}
            <div className="logo pull-left">
              <a href="index.html" className="img-responsive">
                <img src="images/logo-small.png" alt="" title="" />
              </a>
            </div>

            {/* <!--Right Col--> */}
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
                      <ul>
                        <li>
                          <a href="index.html">Homepage One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Homepage Two</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Header Styles</a>
                          <ul>
                            <li>
                              <a href="index.html">Header Style One</a>
                            </li>
                            <li>
                              <a href="index-2.html">Header Style Two</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Solutions</a>
                      <ul>
                        <li>
                          <a href="solutions.html">Solutions</a>
                        </li>
                        <li>
                          <a href="chemical-eng.html">Chemical Engineering</a>
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
                    </li>
                    <li className="dropdown">
                      <a href="#">Projects</a>
                      <ul>
                        <li>
                          <a href="projects.html">Our projects</a>
                        </li>
                        <li>
                          <a href="projects-detail.html">Projects Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <li>
                          <a href="news.html">News Grid View</a>
                        </li>
                        <li>
                          <a href="news-list.html">News List View</a>
                        </li>
                        <li>
                          <a href="news-classNameic.html">
                            News classNameic View
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">News Details</a>
                        </li>
                      </ul>
                    </li>
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
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}
            </div>
          </div>
        </div>
        {/* <!--End Sticky Header--> */}
      </header>
    );
  }
}

export default Header;
