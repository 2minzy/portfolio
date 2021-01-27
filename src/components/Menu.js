import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LinkButton from "./LinkButton"

const MenuContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
`

const MenuItem = styled.li`
  padding: 0.8rem 1.2rem;
  margin: 0 0.4rem;
`

const Menu = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <MenuContainer>
      <MenuItem>
        <Link to="/">HOME</Link>
      </MenuItem>
      <MenuItem>
        <LinkButton onClick={scrollToAbout}>ABOUT</LinkButton>
      </MenuItem>
      <MenuItem>
        <LinkButton onClick={scrollToProjects}>PROJECTS</LinkButton>
      </MenuItem>
      <MenuItem>
        <LinkButton onClick={scrollToContact}>CONTACT</LinkButton>
      </MenuItem>
    </MenuContainer>
  )
}

export default Menu
