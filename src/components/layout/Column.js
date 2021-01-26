import styled from "styled-components"

const Column = styled.div`
  flex-basis: 0;
  flex-grow: ${({ size }) => size ?? 1};
  flex-direction: ${({ direction }) => direction ?? "column"};
  /* margin-top: ${({ marginTop }) => marginTop ?? 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}; */

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: row;
  }
`

export default Column
