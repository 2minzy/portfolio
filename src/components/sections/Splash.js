import React, { useRef, useEffect } from "react"
import LandingVideo from "../LandingVideo"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Wrapper } from "../layout/index"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const SplashWrapper = styled(Wrapper)`
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  overflow: hidden;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 6vw;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10vw;
  }
`

const BackText = styled.div`
  font-family: "Monument", sans-serif;
`

const FrontText = styled(BackText)`
  color: transparent;
  -webkit-text-stroke: 0.02em #fff;
`

const Splash = () => {
  const startTrigger = useRef(null)
  const backText1 = useRef(null)
  const backText2 = useRef(null)
  const frontText1 = useRef(null)
  const frontText2 = useRef(null)

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: startTrigger.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 1000,
      duration: 1,
    }

    gsap.to(backText1.current, config)
    gsap.to(frontText1.current, config)
    gsap.to(backText2.current, {
      ...config,
      x: -1000,
    })
    gsap.to(frontText2.current, {
      ...config,
      x: -1000,
    })
  }, [])

  return (
    <SplashWrapper maxWidth="auto" ref={startTrigger}>
      <TextContainer>
        <BackText ref={backText1}>HI I'M MINJI LEE FRONTEND DEVELOPER</BackText>
        <BackText ref={backText2}>WHO HAS PASSION IN UI/UX DESIGN</BackText>
      </TextContainer>

      <LandingVideo />

      <TextContainer>
        <FrontText ref={frontText1}>
          HI I'M MINJI LEE FRONTEND DEVELOPER
        </FrontText>
        <FrontText ref={frontText2}>WHO HAS PASSION IN UI/UX DESIGN</FrontText>
      </TextContainer>
    </SplashWrapper>
  )
}

export default Splash
