import React from "react"
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
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const MenuItem = styled.li`
  padding: 0.8rem 1.2rem;
  margin: 0 0.4rem;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0.4rem 0.6rem;
    margin: 0.4rem 0;

    button {
      font-size: 1.2rem;
    }
  }
`

const Menu = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <MenuContainer>
      <MenuItem>
        <LinkButton onClick={() => {}}>HOME</LinkButton>
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
