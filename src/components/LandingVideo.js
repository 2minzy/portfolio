import React from "react"
import styled from "styled-components"
import RotateIcon from "../components/RotateIcon"

const VideoContainer = styled.div`
  max-width: 50%;
  margin: auto;
  position: relative;
  text-align: center;

  video {
    width: 200%;
    height: auto;
    transform: translateX(-50%);
    object-fit: cover;
  }

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
const VideoBox = styled.div`
  overflow: hidden;
`

const LandingVideo = () => {
  return (
    <VideoContainer>
      <VideoBox>
        <video src={"../../videos/water.mp4"} autoPlay muted loop></video>
      </VideoBox>
      <RotateIcon />
    </VideoContainer>
  )
}

export default LandingVideo
