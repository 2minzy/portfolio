import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  margin: 400px 200px;
  display: flex;
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
  margin-bottom: 2rem;

  .DescTitle {
    font-size: 1.2rem;
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
          <a href="mailto:minjilee0423@gmail.com">minjilee0423@gamil.com</a>
        </Description>

        <Description>
          <div className="DescTitle">BLOG</div>
          <a href="https://velog.io/@bbio3o" target="_blank">
            velog.io/@bbio3o
          </a>
        </Description>
      </div>
    </Container>
  )
}

export default Contact
