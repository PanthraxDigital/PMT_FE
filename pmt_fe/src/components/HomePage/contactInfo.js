import React from "react";

class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Contact Info Section --> */}
        <section className="contact-info-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* <!-- Info Block --> */}
              {/* <div className="info-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner">
                  <div className="icon-box">
                    <span className="icon fa fa-map-marker" />
                  </div>
                  <div className="text">
                    A204,Virat Prime, plot no-24-25,Shiv Nagar A Niwaru road
                    Jhotwara-302012, Jaipur, Rajasthan, IN
                  </div>
                </div>
              </div> */}

              {/* <!-- Info Block --> */}
              <div className="info-block col-md-6 col-sm-6 col-xs-12">
                <div className="inner">
                  <div className="icon-box">
                    <span className="icon fa fa-volume-control-phone" />
                  </div>
                  <div className="text">
                    <span>+91 97852 02444</span>Mon-Fri, 9am until 6pm
                  </div>
                </div>
              </div>

              {/* <!-- Info Block --> */}
              <div className="info-block col-md-6 col-sm-6 col-xs-12">
                <div className="inner">
                  <div className="icon-box">
                    <span className="icon fa fa-envelope-o" />
                  </div>
                  <div className="text">
                    <span>support@pratapmanufacturingtechnology.com</span>We
                    reply within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Info Section --> */}
      </div>
    );
  }
}

export default ContactInfo;
