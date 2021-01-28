import React, { forwardRef } from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  font-family: "Suisse Intl", sans-serif;
  font-size: 1.2rem;
  height: 80px;
  text-align: center;
  margin: 40px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
    margin: 20px;
    height: 40px;
  }
`

const Footer = ({ scrollToContact }, refSection) => {
  return (
    <FooterContainer ref={refSection}>
      Copyright &copy; {new Date().getFullYear()} | All rights reserved. | MINJI
      LEE
    </FooterContainer>
  )
}

export default forwardRef(Footer)
