import styled from "styled-components"

const Column = styled.div`
  flex-basis: 0;
  flex-grow: ${({ size }) => size ?? 1};
  display: ${({ hidden }) => (hidden?.desktop ? "none" : "initial")};

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ hidden }) => (hidden?.tablet ? "none" : "initial")};
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: ${({ hidden }) => (hidden?.mobile ? "none" : "initial")};
  }
`

export default Column
