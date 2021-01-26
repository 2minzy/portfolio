import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin-top: ${({ marginTop }) => marginTop ?? 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0};

  div:not(:last-child) {
    margin-right: 2rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;

    a,
    button,
    li {
      font-size: 0.8rem;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    font-size: 0.8rem;
    flex-direction: ${({ column }) => column ?? 0};
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: ${({ column }) => column ?? 0};

    div:not(:last-child) {
      margin-right: 0;
    }
  }
`

export default Container
