import React from "react"
import styled from "styled-components"
import { Wrapper, Container, Column } from "../layout/index"
import Title from "../Title"

const Info = styled.article`
  margin-bottom: 2rem;

  h4 {
    margin: 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`

const CenteredMobile = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Column size="2">
          <CenteredMobile>
            <Title text="Contact" />
          </CenteredMobile>
        </Column>

        <Column>
          <Info>
            <h4>EMAIL</h4>
            <a href="mailto:minjilee0423@gmail.com">minjilee0423@gmail.com</a>
          </Info>

          <Info>
            <h4>BLOG</h4>
            <a
              href="https://velog.io/@bbio3o"
              target="_blank"
              rel="noopener noreferrer"
            >
              velog.io/@bbio3o
            </a>
          </Info>

          <Info>
            <h4>LINKEDIN</h4>
            <a
              href="https://www.linkedin.com/in/minji-lee-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/minji-dev
            </a>
          </Info>

          <Info>
            <h4>GITHUB</h4>
            <a
              href="https://github.com/2minzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/2minzy
            </a>
          </Info>
        </Column>
      </Container>
    </Wrapper>
  )
}

export default Contact
