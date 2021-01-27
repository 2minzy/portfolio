import React from "react"
import styled from "styled-components"
import { Wrapper, Container, Column } from "../layout/index"
import Title from "../Title"

// const Title = styled.div`
//   color: grey;
//   margin-right: 200px;
//   font-size: 6rem;
//   font-family: "Monument", sans-serif;

//   div {
//     line-height: 5rem;
//   }

//   .transparent {
//     -webkit-text-stroke: 0.02em #fff;
//     color: transparent;
//   }

//   @media ${({ theme }) => theme.device.tablet} {
//     font-size: 5rem;
//     margin-right: 0;
//   }

//   @media ${({ theme }) => theme.device.mobile} {
//     font-size: 3rem;
//     text-align: center;
//     margin-right: 1rem;

//     div {
//       line-height: 3rem;
//     }
//   }

//   @media ${({ theme }) => theme.device.mobileSm} {
//     font-size: 2rem;
//     div {
//       line-height: 2rem;
//     }
//   }
// `

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 1rem;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .DescTitle {
    display: inline;

    font-size: 1.2rem;
  }

  a {
    &:hover {
      color: #2aaeba;
    }
  }

  .link {
    display: inline;
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;

    .DescTitle {
      font-size: 1rem;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    .DescTitle {
      font-size: 0.8rem;
    }
  }
`

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Title text="Contact" />
        </Column>

        <Column>
          <DescriptionContainer>
            <Description>
              <div className="DescTitle">EMAIL</div>
              <div className="link">
                <a href="mailto:minjilee0423@gmail.com">
                  minjilee0423@gmail.com
                </a>
              </div>
            </Description>

            <Description>
              <div className="DescTitle">BLOG</div>
              <div className="link">
                <a
                  href="https://velog.io/@bbio3o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  velog.io/@bbio3o
                </a>
              </div>
            </Description>

            <Description>
              <div className="DescTitle">GITHUB</div>
              <div className="link">
                <a
                  href="https://github.com/2minzy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/2minzy
                </a>
              </div>
            </Description>
          </DescriptionContainer>
        </Column>
      </Container>
    </Wrapper>
  )
}

export default Contact
