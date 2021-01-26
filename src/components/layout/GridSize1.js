import styled from "styled-components"

const GridSize1 = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  margin-top: ${({ marginTop }) => marginTop ?? 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0};
`

export default GridSize1
