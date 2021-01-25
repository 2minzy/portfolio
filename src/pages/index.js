import React, { useRef, useEffect } from "react"
import Header from "../components/Header"
import LandingVideo from "../components/LandingVideo"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../libs/theme"
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

  @media ${({ theme }) => theme.device.tablet} {
   body {
     width: 100%;
   }
  }
`

const TextContainer = styled.div`
  margin-top: 400px;
  position: relative;
  overflow-x: hidden;
  white-space: nowrap;
  font-family: "Monument", sans-serif;
  font-size: 6rem;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 300px;
  }
`

const FrontText = styled.div`
  position: absolute;

  color: transparent;

  -webkit-text-stroke: 0.02em #fff;
`

const BackText = styled.div`
  position: relative;
  z-index: -1;
`

const IndexPage = () => {
  const refStart = useRef(null)
  const refText1 = useRef(null)
  const refText2 = useRef(null)
  const refText3 = useRef(null)
  const refText4 = useRef(null)

  const refAbout = useRef(null)
  const refProjects = useRef(null)
  const refContact = useRef(null)

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

  const scrollToAbout = e => {
    e.preventDefault()
    refAbout.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    })
  }

  const scrollToProjects = e => {
    e.preventDefault()
    refProjects.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })
  }

  const scrollToContact = e => {
    e.preventDefault()
    refContact.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }

  return (
    <div ref={refStart}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
        <LandingVideo />

        <TextContainer>
          <FrontText ref={refText1}>
            HI I'M MINJI LEE FRONTEND DEVELOPER
          </FrontText>
          <BackText ref={refText2}>
            {" "}
            HI I'M MINJI LEE FRONTEND DEVELOPER
          </BackText>
          <FrontText ref={refText3}>WHO HAS PASSION IN UI/UX DESIGN</FrontText>
          <BackText ref={refText4}>WHO HAS PASSION IN UI/UX DESIGN</BackText>
        </TextContainer>
        <About scrollToAbout={scrollToAbout} ref={refAbout} />
        <Projects scrollToProjects={scrollToProjects} ref={refProjects} />
        <Contact />
        <Footer scrollToContact={scrollToContact} ref={refContact} />
      </ThemeProvider>
    </div>
  )
}

export default IndexPage
