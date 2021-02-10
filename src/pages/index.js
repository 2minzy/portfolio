import React, { useRef } from "react"
import Header from "../components/sections/Header"
import SEO from "../components/seo"
import Splash from "../components/sections/Splash"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import Footer from "../components/sections/Footer"
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
        <SEO
          title="이민지 프론드엔드 개발자 포트폴리오 | Frontend Developer Minji Lee Portfolio"
          description="끊임 없이 배우고 성장하며, UI/UX에 관심이 많은 프론트엔드 개발자 이민지의 포트폴리오 웹사이트 입니다. | Hi! I'm Minji Lee who is passionate and creative Front-end Developer
          with experience in UI/UX Design, Fine Arts and Computer Science."
        />
        <Header
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
