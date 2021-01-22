import React, { useRef, useEffect } from "react"
import Header from "../components/Header"
import profile from "../../public/static/minji_dark.jpg"
import styled, { createGlobalStyle } from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const GlobalStyle = createGlobalStyle`


  body {
    background-color: #0d0d0d;
    color: white;
    overflow-x: auto;
    height: 4000px;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    text-align: center;
  }
`
const ScrollDownIcon = styled.div``

const TextContainer = styled.div`
  margin-top: 300px;
`

const FrontText = styled.div`
  position: absolute;
  font-family: "Monument";
  color: transparent;

  font-size: 6rem;
  -webkit-text-stroke: 0.02em #fff;
`

const BackText = styled.div`
  position: relative;

  font-family: "Monument";
  font-size: 6rem;
  z-index: -1;
`
const ProfileImg = styled.div`
  position: absolute;
  margin-left: 400px;
  img {
    width: 1100px;
  }
  z-index: 0;
`

const IndexPage = () => {
  const refStart = useRef(null)
  const refText1 = useRef(null)
  const refText2 = useRef(null)
  const refText3 = useRef(null)
  const refText4 = useRef(null)

  useEffect(() => {
    gsap.to(refText1.current, {
      scrollTrigger: {
        trigger: refStart.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 1000,
      duration: 1,
    })
    gsap.to(refText2.current, {
      scrollTrigger: {
        trigger: refStart.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 1000,
      duration: 1,
    })
    gsap.to(refText3.current, {
      scrollTrigger: {
        trigger: refStart.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: -1000,
      duration: 1,
    })
    gsap.to(refText4.current, {
      scrollTrigger: {
        trigger: refStart.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: -1000,
      duration: 1,
    })
  }, [])

  return (
    <div ref={refStart}>
      <GlobalStyle />
      <Header />
      <ScrollDownIcon>Scroll Down</ScrollDownIcon>
      <ProfileImg>
        <img src={profile} alt="" />
      </ProfileImg>
      <TextContainer>
        <FrontText ref={refText1}>
          HI I'M MINJI LEE FRONTEND DEVELOPER
        </FrontText>
        <BackText ref={refText2}> HI I'M MINJI LEE FRONTEND DEVELOPER</BackText>
        <FrontText ref={refText3}>WHO HAS PASSION IN UI/UX DESIGN</FrontText>
        <BackText ref={refText4}>WHO HAS PASSION IN UI/UX DESIGN</BackText>
      </TextContainer>
    </div>
  )
}

export default IndexPage
