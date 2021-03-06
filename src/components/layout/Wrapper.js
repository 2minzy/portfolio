import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ?? "1400px"};
  padding: ${({ padding }) => padding?.desktop ?? padding ?? "4rem"};
  margin: 0 auto;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom?.desktop ?? marginBottom ?? "30rem"};

  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ padding }) => padding?.tablet ?? padding ?? "4rem"};
    margin-bottom: ${({ marginBottom }) =>
      marginBottom?.tablet ?? marginBottom ?? "20rem"};
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: ${({ padding }) => padding?.mobile ?? padding ?? "4rem"};
    margin-bottom: ${({ marginBottom }) =>
      marginBottom?.mobile ?? marginBottom ?? "12rem"};
  }
`

export default Wrapper
