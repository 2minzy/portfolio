import styled, { css } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};

  ${({ direction }) =>
    direction ??
    css`
      // Gutters
      div {
        margin: 0 1rem;
      }
      div:not(:last-child) {
        margin-right: 1rem;
        margin-left: 0;
      }
      div:not(:first-child) {
        margin-right: 0;
        margin-left: 1rem;
      }

      @media ${({ theme }) => theme.device.tablet} {
        // Remove gutters on mobile
        div {
          margin: 1rem 0 !important;
        }
        div:not(:last-child) {
          margin-top: 1rem;
          margin-bottom: 0;
        }
        div:not(:first-child) {
          margin-top: 0;
          margin-bottom: 1rem;
        }
      }
    `}

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.device.mobile} {
    align-items: flex-start;
    flex-direction: ${({ mobileDirection }) => mobileDirection ?? "column"};
  }
`

export default Container
