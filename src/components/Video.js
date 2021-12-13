import React, { Component } from "react";
import video1 from "../images/gallus_intro_low_reso.mp4";


class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} />
      </div>
    );
  }
}

export default Video;