import React, { useRef, useEffect } from "react"
import SiteHeader from "../components/SiteHeader"
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
    background-color: #000;
    color: #fff;
    height: 100%;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
    color: #fff;
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const TextSection = styled.div`
  position: relative;
  margin-top: 80px;
  margin-bottom: 400px;
`

const BackContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  overflow: hidden;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 6vw;
`
const FrontContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  overflow: hidden;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 6vw;
`

const FrontText = styled.div`
  color: transparent;
  -webkit-text-stroke: 0.02em #fff;
  font-family: "Monument", sans-serif;
`

const BackText = styled.div`
  font-family: "Monument", sans-serif;
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
    <Wrapper ref={refStart}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SiteHeader
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
        <TextSection>
          <BackContainer>
            <BackText ref={refText2}>
              HI I'M MINJI LEE FRONTEND DEVELOPER
            </BackText>
            <BackText ref={refText4}>WHO HAS PASSION IN UI/UX DESIGN</BackText>
          </BackContainer>
          <LandingVideo />

          <FrontContainer>
            <FrontText ref={refText1}>
              HI I'M MINJI LEE FRONTEND DEVELOPER
            </FrontText>

            <FrontText ref={refText3}>
              WHO HAS PASSION IN UI/UX DESIGN
            </FrontText>
          </FrontContainer>
        </TextSection>

        <About scrollToAbout={scrollToAbout} ref={refAbout} />
        <Projects scrollToProjects={scrollToProjects} ref={refProjects} />
        <Contact />
        <Footer scrollToContact={scrollToContact} ref={refContact} />
      </ThemeProvider>
    </Wrapper>
  )
}

export default IndexPage
