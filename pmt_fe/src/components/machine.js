import React from "react";
import bgImage2 from "../images/main-slider/image-6-1.jpg";
import ProjectData from "../content/project";

class Machine extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {/* <!--Page Title--> */}
        <section
          class="page-title"
          style={{
            backgroundImage: 
            `
            url("https://farm5.staticflickr.com/4853/45966874932_a373ccfb5d_n.jpg")
            `
          }}
        >
          <div class="auto-container">
            <h1>Projects</h1>
            <div class="text">
              Planned set of interrelated tasks to be executed over a fixed
              period.
            </div>
          </div>
          {/* <!--Page Info--> */}
          <div class="page-info">
            <div class="auto-container clearfix">
              <div class="pull-left">
                <ul class="social-icon-one">
                  <li class="share">Share on :</li>
                  <li>
                    <a class="fa fa-facebook-f" href="#" />
                  </li>
                  <li>
                    <a class="fa fa-twitter" href="#" />
                  </li>
                  <li>
                    <a class="fa fa-google-plus" href="#" />
                  </li>
                </ul>
              </div>
              <div class="pull-right">
                <ul class="bread-crumb clearfix">
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
        <section class="project-page-section">
          <div class="auto-container">
            {/* <!--Sortable Masonry--> */}
            <div class="sortable-masonry">
              {/* <!--Filter--> */}
              <div class="filters clearfix">
                <ul class="filter-tabs filter-btns clearfix">
                  <li
                    class="active filter"
                    data-role="button"
                    data-filter=".all"
                  >
                    <h4 style={{ textTransform: "uppercase", fontSize: "2em" }}>
                      Successfully delivered project
                    </h4>
                  </li>
                </ul>
              </div>

              <div class="items-container row clearfix">
                {ProjectData.map(data => (
                  <div class="gallery-item masonry-item all agriculture col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img src={data.imageUrl} alt="" />
                        {/* <!--Overlay Box--> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">{data.name}</a>
                              </h3>
                              <div class="category">{data.subTitle}</div>
                            </div>
                          </div>
                        </div>
                      </figure>
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

export default Machine;
