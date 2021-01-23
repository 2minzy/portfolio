import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  height: 80px;
  text-align: center;
  padding: 40px;
`

const Footer = () => {
  return (
    <FooterContainer>
      Copyright &copy; {new Date().getFullYear()} | All rights reserved. | MINJI
      LEE
    </FooterContainer>
  )
}

export default Footer
