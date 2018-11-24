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
            <div className="row clearfix">
              {serviceData.map((data, index) => (
                <div
                  className="services-block col-md-4 col-sm-6 col-xs-12"
                  key={{ index }}
                >
                  <div className="inner-box">
                    <div className="image">
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
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}
      </div>
    );
  }
}

export default Services;
