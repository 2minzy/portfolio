import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  margin: 1000px 200px;
  display: flex;
  align-items: center;
`

const Title = styled.div`
  color: grey;
  margin-right: 300px;
  font-size: 6rem;
  font-family: "Monument", sans-serif;

  div {
    line-height: 5rem;
  }

  .transparent {
    -webkit-text-stroke: 0.02em #fff;
    color: transparent;
  }
`

const Description = styled.div`
  margin-top: 2rem;

  .DescTitle {
    font-size: 1.2rem;
  }

  a {
    margin-bottom: 2rem;
    &:hover {
      color: #2aaeba;
    }
  }

  .link {
    margin-bottom: 2rem;
  }
`

const Contact = () => {
  return (
    <Container>
      <Title>
        <div>CONTACT</div>
        <div className="transparent">CONTACT</div>
      </Title>

      <div>
        <Description>
          <div className="DescTitle">EMAIL</div>
          <div className="link">
            <a href="mailto:minjilee0423@gmail.com">minjilee0423@gamil.com</a>
          </div>
        </Description>

        <Description>
          <div className="DescTitle">BLOG</div>
          <div className="link">
            <a
              href="https://velog.io/@bbio3o"
              target="_blank"
              rel="noopener noreferrer"
            >
              velog.io/@bbio3o
            </a>
          </div>
        </Description>

        <Description>
          <div className="DescTitle">GITHUB</div>
          <div className="link">
            <a
              href="https://github.com/2minzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/2minzy
            </a>
          </div>
        </Description>
      </div>
    </Container>
  )
}

export default Contact
