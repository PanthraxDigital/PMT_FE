import React from "react";
import { Link } from "react-router-dom";

class MainSlider extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Main Slider --> */}
        <section className="main-slider">
          <div
            className="rev_slider_wrapper fullwidthbanner-container"
            id="rev_slider_one_wrapper"
            data-source="gallery"
          >
            <div
              className="rev_slider fullwidthabanner"
              id="rev_slider_one"
              data-version="5.4.1"
            >
              <ul>
                {/* <li
                  data-description="Slide Description"
                  data-easein="default"
                  data-easeout="default"
                  data-fsmasterspeed="1500"
                  data-fsslotamount="7"
                  data-fstransition="fade"
                  data-hideafterloop="0"
                  data-hideslideonmobile="off"
                  data-index="rs-1687"
                  data-masterspeed="default"
                  data-param1=""
                  data-param10=""
                  data-param2=""
                  data-param3=""
                  data-param4=""
                  data-param5=""
                  data-param6=""
                  data-param7=""
                  data-param8=""
                  data-param9=""
                  data-rotate="0"
                  data-saveperformance="off"
                  data-slotamount="default"
                  data-thumb="images/main-slider/image-1-1.jpg"
                  data-title="Slide Title"
                  data-transition="parallaxvertical"
                >
                  <img
                    alt=""
                    className="rev-slidebg"
                    data-bgfit="cover"
                    data-bgparallax="10"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    src={require("../../images/main-slider/image-2-1.jpg")}
                  />

                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['550','600','550','550']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['-100','-110','-90','-75']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                    style={{
                      zIndex: "7",
                      whiteSpace: "nowrap",
                      textTransform: "left"
                    }}
                  >
                    <h2>
                      Get a solution for all
                      <span className="theme_color"> industries</span>
                    </h2>
                  </div>

                  <div
                    className="tp-caption tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-whitespace="normal"
                    data-width="['700','700','650','550']"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['30','15','10','5']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <div className="text">
                      We are team of the professionals who will build everything
                      <br />
                      you can draw on a paper
                    </div>
                  </div>

                  <div
                    className="tp-caption tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['600','600','550','550']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['120','105','90','95']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                    style={{
                      zIndex: "7",
                      whiteSpace: "nowrap",
                      textTransform: "left"
                    }}
                  >
                    <a href="about.html" className="theme-btn btn-style-one">
                      Learn More
                    </a>
                    <a
                      href="solutions.html"
                      className="theme-btn btn-style-two"
                    >
                      Our Solutions
                    </a>
                  </div>
                </li> */}

                <li
                  data-description="Slide Description"
                  data-easein="default"
                  data-easeout="default"
                  data-fsmasterspeed="1500"
                  data-fsslotamount="7"
                  data-fstransition="fade"
                  data-hideafterloop="0"
                  data-hideslideonmobile="off"
                  data-index="rs-1688"
                  data-masterspeed="default"
                  data-param1=""
                  data-param10=""
                  data-param2=""
                  data-param3=""
                  data-param4=""
                  data-param5=""
                  data-param6=""
                  data-param7=""
                  data-param8=""
                  data-param9=""
                  data-rotate="0"
                  data-saveperformance="off"
                  data-slotamount="default"
                  data-thumb="images/main-slider/image-1-1.jpg"
                  data-title="Slide Title"
                  data-transition="parallaxvertical"
                >
                  <img
                    alt=""
                    className="rev-slidebg"
                    data-bgfit="cover"
                    data-bgparallax="10"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    src="https://farm5.staticflickr.com/4869/45104865175_eab206f8f4_h.jpg"
                  />

                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['550','600','550','550']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['-100','-110','-90','-75']"
                    data-x="['right','right','right','right']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                    style={{
                      zIndex: "7",
                      whiteSpace: "nowrap",
                      textTransform: "left"
                    }}
                  >
                    <h2>
                      Most targeted industry
                      <span className="theme_color"> Clusters</span>
                    </h2>
                  </div>

                  <div
                    className="tp-caption tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-whitespace="normal"
                    data-width="['550','600','550','550']"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['30','15','10','5']"
                    data-x="['right','right','right','right']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <div className="text">
                      From small to large elements in our production we use only
                      fines materials
                    </div>
                  </div>

                  <div
                    className="tp-caption tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['550','600','550','550']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['120','105','90','95']"
                    data-x="['right','right','right','right']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                    style={{
                      zIndex: "7",
                      whiteSpace: "nowrap",
                      textTransform: "left"
                    }}
                  >
                    <Link to="/aboutus" className="theme-btn btn-style-one">
                      Learn More
                    </Link>
                    <Link to="/sevices" className="theme-btn btn-style-two">
                      Our Solutions
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- End Main Slider --> */}
      </div>
    );
  }
}

export default MainSlider;
