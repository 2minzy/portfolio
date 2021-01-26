import React, { useRef, useEffect } from "react"
import LandingVideo from "./LandingVideo"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const TextSection = styled.div`
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
`

const BackText = styled.div`
  font-family: "Monument", sans-serif;
`

const FrontText = styled(BackText)`
  color: transparent;
  -webkit-text-stroke: 0.02em #fff;
`

const Splash = () => {
  const refStart = useRef(null)
  const refText1 = useRef(null)
  const refText2 = useRef(null)
  const refText3 = useRef(null)
  const refText4 = useRef(null)

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: refStart.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 1000,
      duration: 1,
    }

    gsap.to(refText1.current, config)
    gsap.to(refText2.current, config)
    gsap.to(refText3.current, {
      ...config,
      x: -1000,
    })
    gsap.to(refText4.current, {
      ...config,
      x: -1000,
    })
  }, [])

  return (
    <TextSection ref={refStart}>
      <TextContainer>
        <BackText ref={refText2}>HI I'M MINJI LEE FRONTEND DEVELOPER</BackText>
        <BackText ref={refText4}>WHO HAS PASSION IN UI/UX DESIGN</BackText>
      </TextContainer>

      <LandingVideo />

      <TextContainer>
        <FrontText ref={refText1}>
          HI I'M MINJI LEE FRONTEND DEVELOPER
        </FrontText>
        <FrontText ref={refText3}>WHO HAS PASSION IN UI/UX DESIGN</FrontText>
      </TextContainer>
    </TextSection>
  )
}

export default Splash
