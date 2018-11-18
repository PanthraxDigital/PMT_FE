import React from "react";

class WorkProcess extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Work Section --> */}
        <section className="work-section">
          <div className="auto-container">
            {/* <!-- Sec Title --> */}
            <div className="sec-title">
              <h2>Work Process</h2>
            </div>
            <div className="row clearfix">
              {/* <!-- Process Block --> */}
              <div className="process-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="upper-box">
                    <div className="icon-box">
                      <span className="icon flaticon-loupe" />
                      <div
                        className="block-number wow zoomInStable"
                        data-wow-delay="0ms"
                        data-wow-duration="2000ms"
                      >
                        1
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">DISCOVER</a>
                    </h3>
                    <div className="text">
                      People with ideas and experience to develop a vision for
                      the future
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Process Block --> */}
              <div className="process-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="upper-box">
                    <div className="icon-box">
                      <span className="icon flaticon-settings-2" />
                      <div
                        className="block-number wow zoomInStable"
                        data-wow-delay="300ms"
                        data-wow-duration="2000ms"
                      >
                        2
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">BUILD</a>
                    </h3>
                    <div className="text">
                      The right tools at the right time enhances the shard
                      economy
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Process Block --> */}
              <div className="process-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="upper-box">
                    <div className="icon-box">
                      <span className="icon flaticon-new-message-envelope" />
                      <div
                        className="block-number wow zoomInStable"
                        data-wow-delay="600ms"
                        data-wow-duration="2000ms"
                      >
                        3
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">CONNECT</a>
                    </h3>
                    <div className="text">
                      Intgrating clients with partners is the focus of everyday
                      business
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Process Block --> */}
              <div className="process-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="upper-box">
                    <div className="icon-box">
                      <span className="icon flaticon-telemarketer" />
                      <div
                        className="block-number wow zoomInStable"
                        data-wow-delay="900ms"
                        data-wow-duration="2000ms"
                      >
                        4
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="solutions-detail.html">LAUNCH</a>
                    </h3>
                    <div className="text">
                      Bringing highly- <br />
                      anticipated programs to the marketplace
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Work Section --> */}
      </div>
    );
  }
}

export default WorkProcess;
