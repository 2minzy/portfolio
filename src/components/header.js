import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  margin: 40px 80px 0 80px;
  font-size: 0.9rem;

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  li {
    padding: 8px 12px;
    margin: 0 4px;
    list-style: none;
  }
`
const AboutText = styled.p`
  margin: 40px 80px;
  font-size: 1rem;
`

const SectionButton = styled.button`
  background: none;
  border: none;
  outline: 0;
  color: white;
  cursor: pointer;

  &:hover {
    color: #2aaeba;
  }
`

const header = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <Container>
      <Link to="/">
        Minji Lee
        <br />
        Frontend Developer
      </Link>
      <AboutText>
        Hi! I'm Minji Lee, based in Seoul
        <br />
        I am a passionate and creative Front-end Developer
        <br />
        with experience in UI/UX Design, Fine Arts and Computer Science.
      </AboutText>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <SectionButton onClick={scrollToAbout}>About</SectionButton>
        </li>
        <li>
          <SectionButton onClick={scrollToProjects}>Projects</SectionButton>
        </li>
        <li>
          <SectionButton onClick={scrollToContact}>Contact</SectionButton>
        </li>
      </ul>
    </Container>
  )
}

export default header
