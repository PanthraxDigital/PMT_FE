import React from "react";
import bgImage2 from "../images/main-slider/image-6-1.jpg";
import { Link } from "react-router-dom";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.props.menuSelected(6);
  }

  sendEmail() {
    
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* <!--Page Title--> */}
        <section
          className="page-title"
          style={{
            backgroundImage: `url("https://farm5.staticflickr.com/4814/45479846375_05ba5930ba.jpg")`
          }}
        >
          <div className="auto-container">
            <h1>Contact Us</h1>
            <div className="text">contact us for more information</div>
          </div>
          {/* <!--Page Info--> */}
          <div className="page-info">
            <div className="auto-container clearfix">
              <div className="pull-left" style={{ display: "none" }}>
                <ul className="social-icon-one">
                  <li className="share">Share on :</li>
                  <li>
                    <a className="fa fa-facebook-f" href="#" />
                  </li>
                </ul>
              </div>
              <div className="pull-right">
                <ul className="bread-crumb clearfix">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Page Title--> */}

        {/* <!--Services Section--> */}
        <section className="contact-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* <!--Column--> */}
              <div className="column col-md-8 col-sm-12 col-xs-12">
                <h2>Get in Touch</h2>
                <div className="text">
                  if you want to get more info, ping us now.
                </div>
                {/* <!-- Contact Form --> */}
                <div className="contact-form">
                  {/* <!--Contact Form--> */}
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                      <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Name"
                          required
                        />
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <textarea name="message" placeholder="Massage" />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group text-right">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                          onClick={this.sendEmail}
                        >
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!--End Contact Form --> */}
              </div>
              {/* <!--Column--> */}
              <div className="column col-md-4 col-sm-12 col-xs-12">
                <h2>Contact info</h2>
                <div className="text">
                  if you want to get more info, ping us now.
                </div>
                <ul className="list-style-two">
                  <li>
                    <span className="icon fa fa-volume-control-phone" />
                    <strong>+91 97852 02444</strong>Mon-Fri, 9am until 6pm
                  </li>
                  <li>
                    <span className="icon fa fa-envelope-o" />
                    <strong style={{ fontSize: "16px" }}>
                      support@thepmt.in
                    </strong>
                    We reply within 24 hours
                  </li>
                  <li>
                    <span className="icon fa fa-map-marker" />
                    J-497B,Sarna Dungar RIICO Industrial area Jaipur -302012,
                    Rajasthan, IN
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End Services Section--> */}
      </div>
    );
  }
}

export default ContactUs;
