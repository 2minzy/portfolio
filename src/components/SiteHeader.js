import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GridSize1, GridSize2 } from "./layout/index"

const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: "Suisse Intl", sans-serif;
  justify-content: space-between;
  padding: 40px;
  margin-bottom: 40px;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 20px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    flex-direction: column;
    font-size: 0.6rem;
    padding: 16px;
  }
`

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  list-style: none;

  li {
    padding: 8px 12px;
    margin: 0 4px;
    list-style: none;
  }

  @media ${({ theme }) => theme.device.mobile} {
    ul {
      margin-left: -30px;
    }

    li {
      padding: 4px 6px;
      margin: 0 2px;
    }
  }
`

const AboutText = styled.p`
  /* margin: 40px 80px; */
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

const SiteHeader = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <Container>
      <GridSize1>
        <Link to="/">
          MINJI LEE
          <br />
          Frontend Developer
        </Link>
      </GridSize1>
      <GridSize2>
        <AboutText>
          Hi! I'm Minji Lee, based in Seoul
          <br />
          I am a passionate and creative Front-end Developer
          <br />
          with experience in UI/UX Design, Fine Arts and Computer Science.
        </AboutText>
      </GridSize2>
      <GridSize1>
        <Menu>
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
        </Menu>
      </GridSize1>
    </Container>
  )
}

export default SiteHeader
