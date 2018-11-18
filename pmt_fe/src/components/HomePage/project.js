import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Project Section --> */}
        <section
          class="project-section"
          style={{ backgroundImage: "url(images/background/2.jpg)" }}
        >
          <div class="auto-container">
            {/* <!-- Porfolio Tabs --> */}
            <div class="project-tab">
              {/* <!-- Sec Title --> */}
              <div class="sec-title light clearfix">
                <div class="pull-left">
                  <h2>Our Projects</h2>
                </div>
                <div class="tab-btns-box pull-right">
                  {/* <!-- Tabs Header --> */}
                  <div class="tabs-header">
                    <ul class="product-tab-btns clearfix">
                      <li class="p-tab-btn active-btn" data-tab="#p-tab-1">
                        View All
                      </li>
                      <li class="p-tab-btn" data-tab="#p-tab-2">
                        Agriculture
                      </li>
                      <li class="p-tab-btn" data-tab="#p-tab-3">
                        Materials
                      </li>
                      <li class="p-tab-btn" data-tab="#p-tab-4">
                        Chemical
                      </li>
                      <li class="p-tab-btn" data-tab="#p-tab-5">
                        Mechanical
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Tabs Content --> */}
              <div class="p-tabs-content">
                {/* <!-- Portfolio Tab / Active Tab --> */}
                <div class="p-tab active-tab" id="p-tab-1">
                  <div class="project-carousel owl-theme owl-carousel">
                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/1.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/4.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Tab --> */}
                <div class="p-tab" id="p-tab-2">
                  <div class="project-carousel owl-theme owl-carousel">
                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/4.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Tab --> */}
                <div class="p-tab" id="p-tab-3">
                  <div class="project-carousel owl-theme owl-carousel">
                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/4.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Tab --> */}
                <div class="p-tab" id="p-tab-4">
                  <div class="project-carousel owl-theme owl-carousel">
                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Portfolio Tab --> */}
                <div class="p-tab" id="p-tab-5">
                  <div class="project-carousel owl-theme owl-carousel">
                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/4.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/2.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>

                    {/* <!-- Gallery Item --> */}
                    <div class="gallery-item">
                      <div class="inner-box">
                        <figure class="image-box">
                          <img src="images/gallery/3.jpg" alt="" />
                          {/* <!-- Overlay Box --> */}
                          <div class="overlay-box">
                            <div class="overlay-inner">
                              <a href="projects-detail.html" class="image-link">
                                <span class="icon fa fa-link" />
                              </a>
                              <div class="content">
                                <h3>
                                  <a href="projects-detail.html">
                                    Pre Construction
                                  </a>
                                </h3>
                                <div class="category">
                                  Agriculture, Chemical
                                </div>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
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