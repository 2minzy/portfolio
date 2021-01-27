import React, { forwardRef } from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  font-family: "Suisse Intl", sans-serif;
  font-size: 0.9rem;
  height: 80px;
  text-align: center;
  padding: 40px;
  margin-right: 1rem;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 20px;
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
