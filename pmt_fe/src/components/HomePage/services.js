import React from "react";
import serviceData from "../../content/services.json";

class Services extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Services Section --> */}
        <section className="services-section">
          <div className="auto-container">
            {/* <!-- Sec Title --> */}
            <div className="sec-title">
              <h2>Conventional Machines</h2>
            </div>
            <div className="row clearfix" >
              {serviceData.map(data => (
                <div className="services-block col-md-4 col-sm-6 col-xs-12" >
                  <div className="inner-box" >
                    <div className="image" >
                      <img src={`${data.imageUrl}`} alt="" />
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
              {/* <!-- Lathe Machine --> */}
              {/* <div className="services-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box hvr-float">
                  <div className="image">
                    <img
                      src={require("../../images/resource/services-1.jpg")}
                      alt=""
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-chemistry-class-flask-with-liquid-for-experimentation" />
                    </div>
                    <div className="overlay-box clearfix">
                      <div className="text">
                        Modern society consumes large amounts of fuel, and the
                        energy industry is a crucial part of the infrastructure
                        and maintenance of society in almost all countries.
                      </div>
                      <a href="solutions-detail.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">Lathe Machine</a>
                    </h3>
                  </div>
                </div>
              </div> */}

              {/* <!-- Cylindrical grinder --> */}
              {/* <div className="services-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box hvr-float">
                  <div className="image">
                    <img
                      src={require("../../images/resource/services-4.jpg")}
                      alt=""
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-branch-with-leaves-black-shape" />
                    </div>
                    <div className="overlay-box clearfix">
                      <div className="text">
                        Modern society consumes large amounts of fuel, and the
                        energy industry is a crucial part of the infrastructure
                        and maintenance of society in almost all countries.
                      </div>
                      <a href="solutions-detail.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">Cylindrical Grinder</a>
                    </h3>
                  </div>
                </div>
              </div> */}

              {/* <!-- Universal Milling --> */}
              {/* <div className="services-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box hvr-float">
                  <div className="image">
                    <img
                      src={require("../../images/resource/services-5.jpg")}
                      alt=""
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-gears-configuration-tool" />
                    </div>
                    <div className="overlay-box clearfix">
                      <div className="text">
                        Modern society consumes large amounts of fuel, and the
                        energy industry is a crucial part of the infrastructure
                        and maintenance of society in almost all countries.
                      </div>
                      <a href="solutions-detail.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">Universal Milling</a>
                    </h3>
                  </div>
                </div>
              </div> */}

              {/* <!-- Surface Grinder --> */}
              {/* <div className="services-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box hvr-float">
                  <div className="image">
                    <img
                      src={require("../../images/resource/services-3.jpg")}
                      alt=""
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-spray-gas-bottle" />
                    </div>
                    <div className="overlay-box clearfix">
                      <div className="text">
                        Modern society consumes large amounts of fuel, and the
                        energy industry is a crucial part of the infrastructure
                        and maintenance of society in almost all countries.
                      </div>
                      <a href="solutions-detail.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">Surface Grinder</a>
                    </h3>
                  </div>
                </div>
              </div> */}

              {/* <!-- Band Saw --> */}
              {/* <div className="services-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box hvr-float">
                  <div className="image">
                    <img
                      src={require("../../images/resource/services-6.jpeg")}
                      alt=""
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-wrench-tool" />
                    </div>
                    <div className="overlay-box clearfix">
                      <div className="text">
                        Modern society consumes large amounts of fuel, and the
                        energy industry is a crucial part of the infrastructure
                        and maintenance of society in almost all countries.
                      </div>
                      <a href="solutions-detail.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">Band Saw</a>
                    </h3>
                  </div>
                </div>
              </div> */}

              {/* <!-- Turret Milling --> */}
              {/* <div className="services-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box hvr-float">
                  <div className="image">
                    <img
                      src={require("../../images/resource/services-2.jpg")}
                      alt=""
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-flash-1" />
                    </div>
                    <div className="overlay-box clearfix">
                      <div className="text">
                        Modern society consumes large amounts of fuel, and the
                        energy industry is a crucial part of the infrastructure
                        and maintenance of society in almost all countries.
                      </div>
                      <a href="solutions-detail.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">Turret Milling</a>
                    </h3>
                  </div>
                </div>
              </div>
        */}
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}
      </div>
    );
  }
}

export default Services;
