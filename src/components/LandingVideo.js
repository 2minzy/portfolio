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

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 70vh;
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
