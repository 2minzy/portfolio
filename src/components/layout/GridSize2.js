import styled from "styled-components"

const GridSize2 = styled.div`
  flex-basis: 0;
  flex-grow: 2;
  margin-top: ${({ marginTop }) => marginTop ?? 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0};
`

export default GridSize2
