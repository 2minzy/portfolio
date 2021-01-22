import React from "react"
import styled from "styled-components"
import video from "../../public/static/water.mp4"
import RotateIcon from "../components/RotateIcon"

const VideoContainer = styled.div`
  position: absolute;
  text-align: center;

  video {
    /* border-radius: 50%; */
    margin-left: 470px;
    margin-top: -60px;
    width: 800px;
    height: 1000px;
    object-fit: cover;
  }
  z-index: 0;
`
const LandingVideo = () => {
  return (
    <VideoContainer>
      <RotateIcon />
      <video src={video} autoPlay muted loop></video>
    </VideoContainer>
  )
}

export default LandingVideo
