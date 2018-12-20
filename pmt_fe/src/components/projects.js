import React from "react";
import bgImage2 from "../images/main-slider/image-6-1.jpg";
import ProjectData from "../content/project";

class Projects extends React.Component {
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
            url("https://farm5.staticflickr.com/4828/32520100158_574d5098a9.jpg")
            `
          }}
        >
          <div className="auto-container">
            <h1>Projects</h1>
            <div className="text">
              Planned set of interrelated tasks to be executed over a fixed
              period.
            </div>
          </div>
          {/* <!--Page Info--> */}
          <div className="page-info">
            <div className="auto-container clearfix">
              <div className="pull-right">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Projects</li>
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
                      Successfully delivered projects
                    </h4>
                  </li>
                </ul>
              </div>

              <div className="items-container row clearfix">
                {ProjectData.map((data, index) => (
                  <div
                    className="services-block col-lg-3 col-md-6 col-sm-6 col-xs-12"
                    key={index}
                  >
                    <div className="inner-box hvr-float">
                      <div className="image">
                        <img src={data.imageUrl} alt="" />
                      </div>
                      <div className="lower-box">
                        <h4>
                          <a href="solutions-detail.html">{data.name}</a>
                        </h4>
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

export default Projects;
