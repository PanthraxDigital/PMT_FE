import React from "react";
import bgImage from "../../images/background/3.jpg";

class CallToAction extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Call To Action --> */}
        <section
          className="call-to-action"
          style={{
            backgroundImage: `url("https://farm5.staticflickr.com/4821/46016309631_c3528fe2d5_z.jpg")`
          }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              {/* <!-- Column --> */}
              <div className="column col-md-8 col-sm-12 col-xs-12">
                <h2>LOOKING AN ADEQUATE SOLUTION FOR YOUR COMPANY?</h2>
              </div>
              {/* <!-- Btn Column --> */}
              <div className="btn-column col-md-4 col-sm-12 col-xs-12">
                <a href="#" className="theme-btn btn-style-three">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Call To Action --> */}
      </div>
    );
  }
}

export default CallToAction;
