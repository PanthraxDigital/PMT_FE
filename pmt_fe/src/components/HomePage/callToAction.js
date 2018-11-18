import React from "react";
import bgImage from "../../images/background/3.jpg";

class CallToAction extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Call To Action --> */}
        <section
          class="call-to-action"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div class="auto-container">
            <div class="row clearfix">
              {/* <!-- Column --> */}
              <div class="column col-md-8 col-sm-12 col-xs-12">
                <h2>LOOKING AN ADEQUATE SOLUTION FOR YOUR COMPANY?</h2>
              </div>
              {/* <!-- Btn Column --> */}
              <div class="btn-column col-md-4 col-sm-12 col-xs-12">
                <a href="#" class="theme-btn btn-style-three">
                  Request a Quote
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
