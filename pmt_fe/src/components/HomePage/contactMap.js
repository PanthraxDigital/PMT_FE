import React from "react";

class ContactMap extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Contact Map Section --> */}
        <section class="contact-map-section">
          {/* <!-- Map Outer --> */}
          <div class="map-outer">
            {/* <!-- Map Canvas --> */}
            <div
              class="map-canvas hideElement"
              data-zoom="8"
              data-lat="-37.817085"
              data-lng="144.955631"
              data-type="roadmap"
              data-hue="#ffc400"
              data-title="Envato"
              data-icon-path="images/icons/map-marker.png"
              data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
            />
          </div>

          <div class="auto-container clearfix">
            <div class="form-outer">
              <div class="inner-box">
                <h2>Get in Touch</h2>
                <div class="text">
                  if you want to get more info, ping us now.
                </div>

                {/* <!-- Default Form --> */}
                <div class="default-form">
                  {/* <!-- Comment Form --> */}
                  <form method="post" action="contact.html">
                    <div class="form-group">
                      <input
                        type="text"
                        name="username"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <textarea name="message" placeholder="Massage" />
                    </div>

                    <div class="form-group text-right">
                      <button
                        class="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                      >
                        Send Now
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- End Default Form --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Map Section --> */}
      </div>
    );
  }
}

export default ContactMap;