import React, { useRef, useEffect } from "react"
import Header from "../components/Header"
import LandingVideo from "../components/LandingVideo"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import styled, { createGlobalStyle } from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const GlobalStyle = createGlobalStyle`
  body {
    // #0d0d0d;
    background-color: black;
    color: white;
    height: 100%;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
    color: white
  }

  button {
    border: none;
    outline: none;
    text-align: center;
  }
`

const TextContainer = styled.div`
  margin-top: 400px;
  position: relative;
  overflow-x: hidden;
`

const FrontText = styled.div`
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Monument", sans-serif;
  color: transparent;
  font-size: 6rem;
  -webkit-text-stroke: 0.02em #fff;
`

const BackText = styled.div`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Monument", sans-serif;
  font-size: 6rem;
  z-index: -1;
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
      <LandingVideo />
      <TextContainer>
        <FrontText ref={refText1}>
          HI I'M MINJI LEE FRONTEND DEVELOPER
        </FrontText>
        <BackText ref={refText2}> HI I'M MINJI LEE FRONTEND DEVELOPER</BackText>
        <FrontText ref={refText3}>WHO HAS PASSION IN UI/UX DESIGN</FrontText>
        <BackText ref={refText4}>WHO HAS PASSION IN UI/UX DESIGN</BackText>
      </TextContainer>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default IndexPage
