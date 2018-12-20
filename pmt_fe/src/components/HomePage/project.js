import React from "react";
import bgImage from "../../images/background/2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class Project extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
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
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 361,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };
    return (
      <div>
        {/* <!-- Project Section --> */}
        <section
          class="project-section"
          style={{
            backgroundImage: `url("https://farm5.staticflickr.com/4834/44200845270_60d61ec21f_c.jpg")`
          }}
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
                {/* <!-- Gallery Item --> */}
                <Slider ref={c => (this.slider = c)} {...settings}>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src="https://farm5.staticflickr.com/4853/31441595777_491464d811_n.jpg"
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        {/* <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Tube Bending Parts
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div> */}
                        <div>
                          <h3
                            style={{
                              color: "white",
                              textAlign: "center",
                              padding: "0.5em"
                            }}
                          >
                            Tube Bending Parts
                          </h3>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src="https://farm5.staticflickr.com/4851/31441676597_43cd160334_n.jpg"
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        {/* <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Press tool for casting trimming
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div> */}
                        <div>
                          <h3
                            style={{
                              color: "white",
                              textAlign: "center",
                              padding: "0.5em"
                            }}
                          >
                            Press tool for casting trimming
                          </h3>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div class="gallery-item">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src="https://farm5.staticflickr.com/4860/31441596257_c9e54db5e8_n.jpg"
                          alt=""
                        />
                        {/* <!-- Overlay Box --> */}
                        {/* <div class="overlay-box">
                          <div class="overlay-inner">
                            <a href="projects-detail.html" class="image-link">
                              <span class="icon fa fa-link" />
                            </a>
                            <div class="content">
                              <h3>
                                <a href="projects-detail.html">
                                  Match plate for sand casting
                                </a>
                              </h3>
                              
                            </div>
                          </div>
                        </div> */}
                        <div>
                          <h3
                            style={{
                              color: "white",
                              textAlign: "center",
                              padding: "0.5em"
                            }}
                          >
                            Match plates for Sand Casting
                          </h3>
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
