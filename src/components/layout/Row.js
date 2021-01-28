import styled from "styled-components"

const Row = styled.article`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin ?? 0};

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`

export default Row
