import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 40px;
  margin: 0 auto;
  margin-bottom: 40rem;

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 20rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 4rem;
  }
`

export default Wrapper
