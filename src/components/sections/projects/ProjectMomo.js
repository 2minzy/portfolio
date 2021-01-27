import React, { useRef } from "react"
import styled from "styled-components"
import { Column, Container } from "../../layout/index"
import OutlinedButton from "../../OutlinedButton"

const Content = styled.article`
  display: flex;
  flex-direction: column;
`

const ProjectMomo = () => {
  const image = useRef(null)

  return (
    <Container>
      <Column size="3">
        <img src={"../../images/momoLanding.jpg"} alt="" ref={image} />
        <Content>
          <p>
            MOMO <br />
            E-commerce Fashion Store <br />
            Website
          </p>
          <OutlinedButton
            href="https://momostores.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW DEMO
          </OutlinedButton>
          <OutlinedButton
            href="https://velog.io/@bbio3o/MOMO-%EC%98%A8%EB%9D%BC%EC%9D%B8-%ED%8C%A8%EC%85%98-E-commerce-%EC%87%BC%ED%95%91%EB%AA%B0"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </OutlinedButton>
        </Content>
      </Column>
      <Column hidden={{ mobile: true }}>
        <img src={"../../images/momoShop.jpg"} alt="momo shop" />
        <img src={"../../images/momoPayment.jpg"} alt="momo payment" />
      </Column>
    </Container>
  )
}

export default ProjectMomo
