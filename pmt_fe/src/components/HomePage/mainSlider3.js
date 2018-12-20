import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class MainSlider extends React.Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={250}
      >
        <div >
          <img src="https://farm5.staticflickr.com/4847/31452390037_be9c7a7126.jpg" />
        </div>
        {/* <div style={{ height: "30em" }}>
          <img src="https://farm5.staticflickr.com/4869/45104865175_eab206f8f4_h.jpg" />
        </div> */}
      </Carousel>
    );
  }
}

export default MainSlider;
