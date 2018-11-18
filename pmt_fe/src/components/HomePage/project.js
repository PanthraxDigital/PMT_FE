import React from "react";
import { bgImage } from "../../images/background/2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class Project extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 2000,
      swipeToSlide: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      arrows: true,
      responsive: [
        {
          breakpoint: 641,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 361,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        {/* <!-- Project Section --> */}
        <section
          class="project-section"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div class="auto-container">
            {/* <!-- Porfolio Tabs --> */}
            <div class="project-tab">
              {/* <!-- Sec Title --> */}
              <div class="sec-title light clearfix">
                <div class="pull-left">
                  <h2>Our Projects</h2>
                </div>
              </div>
              {/* <!-- Tabs Content --> */}
              <div class="p-tabs-content">
                {/* <!-- Portfolio Tab / Active Tab --> */}
                {/* <!-- Gallery Item --> */}
                <Slider ref={c => (this.slider = c)} {...settings}>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={require("../../images/gallery/1.jpg")}
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Pre Construction
                                </a>
                              </h3>
                              <div class="category">Agriculture, Chemical</div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Project Section --> */}
      </div>
    );
  }
}
export default Project;
