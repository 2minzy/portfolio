import React from "react"
import styled, { css } from "styled-components"

// const TitleWrapper = styled.div`

/* div {
    line-height: 5rem;
  }

  .transparent {
    -webkit-text-stroke: 0.02em #fff;
    color: transparent;
  } */

/* @media ${({ theme }) => theme.device.tablet} {
    font-size: 4rem;
    margin-right: 3rem;

    div {
      line-height: 3rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 260px;
    font-size: 2rem;
    div {
      line-height: 2rem;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    margin-left: 220px;
  } */
// `

const TitleWrapper = styled.div`
  position: relative;
  z-index: 1;

  ${({ vertical }) =>
    vertical &&
    css`
      writing-mode: vertical-lr;
    `}

  ${({ float }) =>
    float &&
    (float === "right"
      ? css`
          position: absolute;
          top: 0;
          right: -3rem;
        `
      : css`
          transform: rotate(180deg);
          position: absolute;
          bottom: 0;
          left: -3rem;
        `)}
`

const FilledTitle = styled.h2`
  color: grey;
  margin: 0;
  /* position: absolute; */
  /* z-index: 1; */
  /* right: 0; */
  font-size: 6vw;
  font-family: "Monument", sans-serif;
  text-transform: uppercase;
  line-height: 0.8;
`

const OutlinedTitle = styled(FilledTitle)`
  -webkit-text-stroke: 0.02em #fff;
  color: transparent;
`

const Title = ({ text, vertical, float }) => {
  return (
    <TitleWrapper vertical={vertical} float={float}>
      <FilledTitle>{text}</FilledTitle>
      <OutlinedTitle>{text}</OutlinedTitle>
    </TitleWrapper>
  )
}

export default Title
