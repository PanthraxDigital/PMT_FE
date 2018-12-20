import React from "react";
import machineData from "../content/machine";
import { Link } from "react-router-dom";

class Machines extends React.Component {
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
            backgroundImage: `
            url("https://farm5.staticflickr.com/4900/32520213268_0c80e82bcf.jpg")
            `
          }}
        >
          <div className="auto-container">
            <h1>Machines</h1>
            <div className="text">
              The state-of-art machines shape your products
            </div>
          </div>
          {/* <!--Page Info--> */}
          <div className="page-info">
            <div className="auto-container clearfix">
              <div className="pull-left" style={{ display: "none" }}>
                <ul className="social-icon-one">
                  <li className="share">Share on :</li>
                  <li>
                    <a className="fa fa-facebook-f" href="#" />
                  </li>
                </ul>
              </div>
              <div className="pull-right">
                <ul className="bread-crumb clearfix">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Machines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Page Title--> */}

        {/* <!--Project Section--> */}
        <section className="project-page-section">
          <div className="auto-container">
            {/* <!--Sortable Masonry--> */}
            <div className="sortable-masonry">
              {/* <!--Filter--> */}
              <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                  <li
                    className="active filter"
                    data-role="button"
                    data-filter=".all"
                  >
                    <h4 style={{ textTransform: "uppercase", fontSize: "2em" }}>
                      State-Of-Art Machines
                    </h4>
                  </li>
                </ul>
              </div>

              <div className="items-container row clearfix">
                {machineData.map((data, index) => (
                  <div
                    className="services-block col-lg-3 col-md-6 col-sm-6 col-xs-12"
                    key={index}
                  >
                    <div className="inner-box hvr-float">
                      <div className="image">
                        <img src={data.imageUrl} alt="" />
                        <div className="overlay-box clearfix">
                          <div className="text">{data.description}</div>
                        </div>
                      </div>
                      <div className="lower-box">
                        <h3>
                          <a href="solutions-detail.html">{data.name}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Machines;
