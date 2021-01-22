import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  margin-left: -180px;

  svg {
    width: 100%;
    height: 160px;
    letter-spacing: 0.52em;

    text {
      transform-origin: 50% 50%;
      animation: rotate 10s linear infinite;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(-360deg);
    }
  }
`

const SVGText = () => {
  return (
    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: `<svg viewBox="0 0 150 150">
    <path
      id="curve"
      fill="transparent"
      d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
    />
    <text fill="#fff">
      <textPath xlink:href="#curve"> SCROLL DOWN ☆☆☆☆ </textPath>
    </text>
  </svg>`,
        }}
      ></div>
    </Container>
  )
}

const RotateIcon = () => {
  return (
    <Container>
      <SVGText />
    </Container>
  )
}

export default RotateIcon
