import React from "react"
import { Link } from "gatsby"
import { Wrapper, Container, Column } from "../layout/index"
import Menu from "../Menu"

const Logo = () => (
  <Link className="logo" to="/">
    <h1>MINJI LEE</h1>
    <h2>Frontend Developer</h2>
  </Link>
)

const Header = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <Wrapper maxWidth="auto" marginBottom="8rem">
      <Container>
        <Column size="1">
          <Logo />
        </Column>
        <Column size="2" hidden={{ mobile: true, tablet: true }}>
          <p>
            Hi! I'm Minji Lee, based in Seoul
            <br />
            I am a passionate and creative Front-end Developer
            <br />
            with experience in UI/UX Design, Fine Arts and Computer Science.
          </p>
        </Column>
        <Column size="1">
          <Menu
            scrollToAbout={scrollToAbout}
            scrollToProjects={scrollToProjects}
            scrollToContact={scrollToContact}
          />
        </Column>
      </Container>
    </Wrapper>
  )
}

export default Header
