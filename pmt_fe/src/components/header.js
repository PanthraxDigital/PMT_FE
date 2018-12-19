import React from "react";
import { Link } from "react-router-dom";

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
                      <Link to="/">
                        <span className="icon fa fa-globe" />
                        Jaipur, Rajasthan, IN
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon fa fa-volume-control-phone" /> +91
                        97852 02444 | +91 77920 51120
                      </Link>
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
                    <Link to="/">
                      <img
                        src="https://farm5.staticflickr.com/4908/44560057870_8c76b8f129_o.png"
                        alt=""
                        title=""
                        style={{ width: "55%" }}
                      />
                    </Link>
                  </div>
                </div>

                <div className="pull-right upper-right clearfix">
                  {/* <!-- Info Box --> */}
                  {/* <div className="upper-column info-box">
                    <div className="icon-box">
                      <span className="flaticon-stamp-1" />
                    </div>
                    <ul>
                      <li>
                        <strong>Certified Company</strong>
                      </li>
                      <li>ISO 9001: 2010</li>
                    </ul>
                  </div> */}

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
                    <Link to="/contactus" className="order-btn theme-btn">
                      Get in Touch
                    </Link>
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
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/machines">Machines</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link to="/contactus">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* <!-- Main Menu End --> */}
                {/* <!-- Search Box --> */}
                {/* <div className="outer-box hideElement">
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
                </div> */}
              </div>
            </div>
          </div>
          {/* <!-- End Header Lower --> */}

          {/* <!-- Sticky Header --> */}
          <div className="sticky-header">
            <div className="auto-container clearfix">
              {/* <!-- Logo --> */}
              <div className="logo pull-left">
                <Link to="/" className="img-responsive">
                  <img
                    src="https://farm5.staticflickr.com/4908/44560057870_8c76b8f129_o.png"
                    alt=""
                    title=""
                    style={{ maxWidth: "40%" }}
                  />
                </Link>
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
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/machines">Machines</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/projects">Projects</Link>
                      </li>

                      <li>
                        <Link to="/contactus">Contact us</Link>
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
