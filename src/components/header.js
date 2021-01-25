import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  font-family: "Suisse Intl", sans-serif;
  justify-content: space-between;
  margin: 40px 80px 0 80px;
  font-size: 0.9rem;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding: 8px 12px;
    margin: 0 4px;
    list-style: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin: 30px 20px 0 20px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    font-size: 0.8rem;

    ul {
      margin-left: -30px;
    }

    li {
      padding: 4px 6px;
      margin: 0 2px;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    flex-direction: column;
    font-size: 0.6rem;
    margin: 20px 10px 0 10px;
  }
`
const AboutText = styled.p`
  margin: 40px 80px;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

const SectionButton = styled.button`
  background: none;
  border: none;
  outline: 0;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #2aaeba;
  }

  a {
    &:hover {
      color: #2aaeba;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.7rem;
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    font-size: 0.6rem;
  }
`

const header = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <Container>
      <Link to="/">
        MINJI LEE
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
          <SectionButton>
            <Link to="/">HOME</Link>
          </SectionButton>
        </li>
        <li>
          <SectionButton onClick={scrollToAbout}>ABOUT</SectionButton>
        </li>
        <li>
          <SectionButton onClick={scrollToProjects}>PROJECTS</SectionButton>
        </li>
        <li>
          <SectionButton onClick={scrollToContact}>CONTACT</SectionButton>
        </li>
      </ul>
    </Container>
  )
}

export default header
