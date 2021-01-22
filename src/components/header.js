import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  margin: 40px 80px 0 80px;
  font-size: 0.8rem;

  .logo {
    color: white;
  }

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  li {
    padding: 8px 12px;
    margin: 0 4px;
    list-style: none;
    cursor: pointer;

    &:hover {
      color: #2aaeba;
    }
  }
`
const AboutText = styled.p`
  margin: 40px 80px;
  font-size: 1rem;
`

const header = () => {
  return (
    <Container>
      <Link to="/" className="logo">
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
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Container>
  )
}

export default header
