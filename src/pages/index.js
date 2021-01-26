import React, { useRef } from "react"
import SiteHeader from "../components/SiteHeader"
import Splash from "../components/Splash"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import styled, { ThemeProvider } from "styled-components"
import theme from "../libs/theme"

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
`

const IndexPage = () => {
  const refAbout = useRef(null)
  const refProjects = useRef(null)
  const refContact = useRef(null)

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
    <MainWrapper>
      <ThemeProvider theme={theme}>
        <SiteHeader
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
        <Splash />
        <About scrollToAbout={scrollToAbout} ref={refAbout} />
        <Projects scrollToProjects={scrollToProjects} ref={refProjects} />
        <Contact />
        <Footer scrollToContact={scrollToContact} ref={refContact} />
      </ThemeProvider>
    </MainWrapper>
  )
}

export default IndexPage
