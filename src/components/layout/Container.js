import styled, { css } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};

  ${({ direction }) =>
    direction ??
    css`
      // Gutters
      div {
        margin-right: 1rem;
        margin-left: 1rem;
      }
      div:not(:last-child) {
        margin-right: 1rem;
        margin-left: 0;
      }
      div:not(:first-child) {
        margin-right: 0;
        margin-left: 1rem;
      }
    `}

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;

    // Remove gutters on mobile
    div {
      margin: 0;
    }
  }
`

/* @media ${({ theme }) => theme.device.tablet} {
    padding: 20px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    flex-direction: column;
    font-size: 0.6rem;
    padding: 16px;
  } */

/* margin-top: ${({ marginTop }) => marginTop ?? 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0};
  align-items: ${({ alignItems }) => alignItems ?? 0}; */

/* @media ${({ theme }) => theme.device.tablet} {
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
  } */

export default Container
