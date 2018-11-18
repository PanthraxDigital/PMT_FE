import React from "react";
import bgImage2 from "../images/main-slider/image-6-1.jpg";
import ServiceData from "../content/services";

class Solutions extends React.Component {
  render() {
    return (
      <div>
        {/* <!--Page Title--> */}
        <section
          class="page-title"
          style={{ backgroundImage: `url(${bgImage2})` }}
        >
          <div class="auto-container">
            <h1>Sevices</h1>
            <div class="text">
              Embark the services that could lead to best project development
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
                  <li>Sevices</li>
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
                      Uncompromise services at your footstep
                    </h4>
                  </li>
                </ul>
              </div>

              <div class="items-container row clearfix">
                {ServiceData.map(data => (
                  <div class="services-block col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="inner-box hvr-float">
                      <div class="image">
                        <img src={data.imageUrl} alt="" />
                        <div class="icon-box">
                          <span class="icon flaticon-home" />
                        </div>
                        <div class="overlay-box clearfix">
                          <div class="text">
                            {data.description}
                          </div>
                          <a href="solutions-detail.html" class="read-more">
                            Read More
                          </a>
                        </div>
                      </div>
                      <div class="lower-box">
                        <h3>
                          <a href="solutions-detail.html">
                            {data.name}
                          </a>
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

export default Solutions;
