import styled from "styled-components"

const OutlinedButton = styled.a`
  display: inline-block;
  max-width: 200px;
  border: 1px solid;
  padding: 1.6rem;
  text-align: center;
  margin-bottom: 1.6rem;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`

export default OutlinedButton
