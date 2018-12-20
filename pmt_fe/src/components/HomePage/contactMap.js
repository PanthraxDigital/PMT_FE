import React from "react";

class ContactMap extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Contact Map Section --> */}
        <section
          class="contact-map-section"
          style={{
            // backgroundImage: `url("https://farm5.staticflickr.com/4822/46016313831_3e4180af74_b.jpg")`
            backgroundImage: `url("https://farm5.staticflickr.com/4889/46343004762_41f8cdc5a3_o.png")`,
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* <!-- Map Outer --> */}
          <div class="map-outer">
            {/* <!-- Map Canvas --> */}
            <div />
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
