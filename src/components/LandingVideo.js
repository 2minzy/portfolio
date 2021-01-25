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

  @media ${({ theme }) => theme.device.tablet} {
    video {
      margin-left: 150px;
      margin-top: -50px;
      width: 700px;
      height: 900px;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    video {
      margin-left: 120px;
      margin-top: -50px;
      width: 500px;
      height: 700px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    video {
      margin-left: 55px;
      margin-top: -80px;
      width: 250px;
      height: 600px;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    video {
      margin-left: 52px;
      margin-top: -80px;
      width: 200px;
      height: 400px;
    }
  }
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
