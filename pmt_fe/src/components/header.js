import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Main Header --> */}
        <header class="main-header">
          {/* <!-- Header Top --> */}
          <div class="header-top">
            <div class="auto-container">
              <div class="inner-container clearfix">
                <div class="top-left">
                  <ul class="clearfix">
                    <li>Turning big ideas into great products</li>
                    <li>
                      <a href="#">
                        <span class="icon fa fa-globe" />
                        Jaipur, Rajasthan, IN
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon fa fa-volume-control-phone" /> +91
                        97852 02444 | +91 77920 51120
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="top-right clearfix">
                  <ul class="social-icon-one">
                    <li>
                      <a href="#">
                        <span class="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Header-Upper --> */}
          <div class="header-upper">
            <div class="auto-container">
              <div class="clearfix">
                <div class="pull-left logo-outer">
                  <div class="logo">
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

                <div class="pull-right upper-right clearfix">
                  {/* <!-- Info Box --> */}
                  <div class="upper-column info-box">
                    <div class="icon-box">
                      <span class="flaticon-stamp-1" />
                    </div>
                    <ul>
                      <li>
                        <strong>Certified Company</strong>
                      </li>
                      <li>ISO 9001: 2010</li>
                    </ul>
                  </div>

                  {/* <!-- Info Box --> */}
                  <div class="upper-column info-box">
                    <div class="icon-box">
                      <span class="flaticon-trophy-2" />
                    </div>
                    <ul>
                      <li>
                        <strong>Great Industrial</strong>
                      </li>
                      <li>Solution Provider</li>
                    </ul>
                  </div>

                  {/* <!-- Info Box --> */}
                  <div class="upper-column info-box">
                    <a href="contact.html" class="order-btn theme-btn">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Header Upper --> */}

          {/* <!-- Header Lower --> */}
          <div class="header-lower">
            <div class="auto-container">
              <div class="nav-outer clearfix">
                {/* <!-- Main Menu --> */}
                <nav class="main-menu">
                  <div class="navbar-header">
                    {/* <!-- Toggle Button --> */}
                    <button
                      type="button"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span class="icon-bar" />
                      <span class="icon-bar" />
                      <span class="icon-bar" />
                    </button>
                  </div>

                  <div class="navbar-collapse collapse clearfix">
                    <ul class="navigation clearfix">
                      <li class="current dropdown">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li class="dropdown">
                        <a href="solutions.html">Solutions</a>
                        <div class="hideElement">
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
                      <li class="dropdown">
                        <a href="projects.html">Projects</a>
                        <div class="hideElement">
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

                      <div class="hideElement">
                        <li class="dropdown">
                          <a href="#">News</a>
                          <ul class="hideElement">
                            <li>
                              <a href="news.html">News Grid View</a>
                            </li>
                            <li>
                              <a href="news-list.html">News List View</a>
                            </li>
                            <li>
                              <a href="news-classic.html">News Classic View</a>
                            </li>
                            <li>
                              <a href="news-detail.html">News Details</a>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <div class="hideElement">
                        <li class="dropdown" class="hideElement">
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
                <div class="outer-box hideElement">
                  {/* <!-- Search Box --> */}
                  <div class="dropdown dropdown-outer">
                    <button
                      class="search-box-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="fa fa-search" />
                    </button>
                    <ul
                      class="dropdown-menu pull-right search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <li class="panel-outer">
                        <div class="form-container">
                          <form method="post" action="blog.html">
                            <div class="form-group">
                              <input
                                type="search"
                                name="field-name"
                                value=""
                                placeholder="Search Here"
                                required=""
                              />
                              <button type="submit" class="search-btn">
                                <span class="fa fa-search" />
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
          <div class="sticky-header">
            <div class="auto-container clearfix">
              {/* <!-- Logo --> */}
              <div class="logo pull-left">
                <a href="index.html" class="img-responsive">
                  <img src="images/logo-small.png" alt="" title="" />
                </a>
              </div>

              {/* <!-- Right Col --> */}
              <div class="right-col pull-right">
                {/* <!-- Main Menu --> */}
                <nav class="main-menu">
                  <div class="navbar-header">
                    {/* <!-- Toggle Button --> */}
                    <button
                      type="button"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span class="icon-bar" />
                      <span class="icon-bar" />
                      <span class="icon-bar" />
                    </button>
                  </div>

                  <div class="navbar-collapse collapse clearfix">
                    <ul class="navigation clearfix">
                      <li class="current dropdown">
                        <a href="#">Home</a>
                    
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Solutions</a>
                        <div class="hideElement">
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
                      <li class="dropdown">
                        <a href="#">Projects</a>
                        <div class="hideElement">
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

                      <li class="dropdown">
                        <a href="#">News</a>
                        <div class="hideElement">
                          <ul>
                            <li>
                              <a href="news.html">News Grid View</a>
                            </li>
                            <li>
                              <a href="news-list.html">News List View</a>
                            </li>
                            <li>
                              <a href="news-classic.html">News Classic View</a>
                            </li>
                            <li>
                              <a href="news-detail.html">News Details</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <div class="hideElement">
                        <li class="dropdown">
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
