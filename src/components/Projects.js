import React, { useEffect, useRef, forwardRef } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container, GridSize1, GridSize2, GridSize3 } from "./layout/index"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 400px;
  padding: 40px;
  font-family: "Suisse Intl", sans-serif;
  font-size: 0.9rem;
  position: relative;

  .momoDetail {
    margin-left: 2rem;
  }

  .link {
    max-width: 200px;
    border: 1px solid;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;

    a {
      padding: 1rem;
    }

    &:hover {
      a {
        color: #000;
      }
      background-color: #fff;
    }
  }
`

const Title = styled.div`
  color: grey;
  position: absolute;
  z-index: 1;
  right: 0;
  font-size: 6vw;
  font-family: "Monument", sans-serif;
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: vertical-lr;

  div {
    line-height: 5rem;
  }

  .transparent {
    -webkit-text-stroke: 0.02em #fff;
    color: transparent;
  }

  @media ${({ theme }) => theme.device.tablet} {
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
  }
`

const Title2 = styled.div`
  position: absolute;
  left: 0;
  color: grey;
  font-size: 6vw;
  font-family: "Monument", sans-serif;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: right;

  div {
    line-height: 5rem;
  }

  .transparent {
    -webkit-text-stroke: 0.02em #fff;
    color: transparent;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`

const ImageContainer = styled.div`
  max-width: 70%;
  margin: auto;

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 100%;
  }
`

const MobileRemove = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`

const Description = styled.div`
  margin-top: 200px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 0;
  }
`

const Projects = ({ scrollToProjects }, refSection) => {
  const refTitle = useRef(null)
  const refTitle2 = useRef(null)
  const refImage1 = useRef(null)
  const refImage2 = useRef(null)
  const refImage3 = useRef(null)
  const refSeoulDesc = useRef(null)
  const refImageT = useRef(null)
  const refImage4 = useRef(null)
  const refImage5 = useRef(null)
  const refAsanaDesc = useRef(null)

  useEffect(() => {
    gsap.to(refTitle.current, {
      yPercent: -220,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,

        scrub: true,
      },
    })

    gsap.to(refImage1.current, {
      yPercent: -120,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,

        scrub: true,
      },
    })

    gsap.to(refTitle2.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,

        scrub: true,
      },
    })
  }, [refSection])

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(refImage2.current, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5)

    ScrollTrigger.create({
      onUpdate: self => {
        let skew = clamp(self.getVelocity() / -200)

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.3,
            ease: "none",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    })

    gsap.set(refImage2.current, {
      transformOrigin: "left center",
      force3D: true,
    })

    gsap.to(refImage2.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,

        scrub: true,
      },
    })
  }, [refSection])

  useEffect(() => {
    gsap.to(refSeoulDesc.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,

        scrub: true,
      },
    })
  }, [refSection])

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter2 = gsap.quickSetter(refImage3.current, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5)

    ScrollTrigger.create({
      onUpdate: self => {
        let skew = clamp(self.getVelocity() / -200)

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.3,
            ease: "none",
            overwrite: true,
            onUpdate: () => skewSetter2(proxy.skew),
          })
        }
      },
    })
  }, [])

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter6 = gsap.quickSetter(refImageT.current, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5)

    ScrollTrigger.create({
      onUpdate: self => {
        let skew = clamp(self.getVelocity() / -200)

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.3,
            ease: "none",
            overwrite: true,
            onUpdate: () => skewSetter6(proxy.skew),
          })
        }
      },
    })

    gsap.set(refImageT.current, {
      transformOrigin: "right center",
      force3D: true,
    })
  }, [])

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter3 = gsap.quickSetter(refImage4.current, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5)

    ScrollTrigger.create({
      onUpdate: self => {
        let skew = clamp(self.getVelocity() / -200)

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.3,
            ease: "none",
            overwrite: true,
            onUpdate: () => skewSetter3(proxy.skew),
          })
        }
      },
    })

    gsap.set(refImage4.current, {
      transformOrigin: "left center",
      force3D: true,
    })
  }, [])

  useEffect(() => {
    gsap.to(refImage5.current, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: refImage4.current,

        scrub: true,
      },
    })
  }, [])

  useEffect(() => {
    gsap.to(refAsanaDesc.current, {
      yPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: refImage5.current,

        scrub: true,
      },
    })
  }, [])

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter4 = gsap.quickSetter(refImage5.current, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5)

    ScrollTrigger.create({
      onUpdate: self => {
        let skew = clamp(self.getVelocity() / -200)

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.3,
            ease: "none",
            overwrite: true,
            onUpdate: () => skewSetter4(proxy.skew),
          })
        }
      },
    })

    gsap.set(refImage5.current, {
      transformOrigin: "left center",
      force3D: true,
    })
  }, [])

  return (
    <Wrapper ref={refSection}>
      <Title ref={refTitle}>
        <div>PROJECTS</div>
        <div className="transparent">PROJECTS</div>
      </Title>

      <Container marginBottom="80px">
        <GridSize3>
          <img src={"../../images/momoLanding.jpg"} alt="" />
          <div className="description">
            <p>
              MOMO <br />
              E-commerce Fashion Store <br />
              Website
            </p>
            <div className="link">
              <a
                href="https://momostores.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW DEMO
              </a>
            </div>
            <div className="link">
              <a
                href="https://velog.io/@bbio3o/MOMO-%EC%98%A8%EB%9D%BC%EC%9D%B8-%ED%8C%A8%EC%85%98-E-commerce-%EC%87%BC%ED%95%91%EB%AA%B0"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
        </GridSize3>
        <GridSize1 marginTop="300px">
          <MobileRemove>
            <img src={"../../images/momoShop.jpg"} alt="" ref={refImage1} />
            <img src={"../../images/momoPayment.jpg"} alt="" ref={refImage2} />
          </MobileRemove>
        </GridSize1>
      </Container>

      <Container marginBottom="200px" marginTop="200px" column="column">
        <GridSize2 marginBottom="300px">
          <ImageContainer>
            <img src={"../../images/seoulLanding.jpg"} alt="" ref={refImage3} />
          </ImageContainer>
        </GridSize2>
        <GridSize1>
          <p>
            SEOULITE <br />
            Seoul wifi map <br />
            Website
          </p>
          <div className="link">
            <a
              href="https://seoulite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW DEMO
            </a>
          </div>
          <div className="link">
            <a
              href="https://velog.io/@bbio3o/Project-Seoulite-%EC%84%9C%EC%9A%B8%EC%8B%9C-wifi-%EC%9C%84%EC%B9%98-%EC%A7%80%EB%8F%84-%EC%95%B1-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%A7%80%EB%8F%84-API-%EC%84%9C%EC%9A%B8-%EC%97%B4%EB%A6%B0%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B4%91%EC%9E%A5-%ED%99%9C%EC%9A%A9"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW PROJECT
            </a>
          </div>
        </GridSize1>
      </Container>

      <Container marginBottom="80px" column="column">
        <Title2 ref={refTitle2}>
          <div className="transparent">PROJECTS</div>
          <div>PROJECTS</div>
        </Title2>

        <GridSize1 marginTop="200px">
          <Description>
            <p>
              BUNGBUNG <br />
              Kids Mobility Service <br />
              Mobile UI/UX
            </p>
          </Description>
        </GridSize1>
        <GridSize2>
          <img src={"../../images/uiA.jpg"} alt="" ref={refImageT} />
          <img src={"../../images/uiB.jpg"} alt="" ref={refImage4} />
        </GridSize2>
      </Container>

      <Container marginTop="300px" column="column">
        <GridSize2>
          <img src={"../../images/asanaLanding.jpg"} alt="" ref={refImage5} />
        </GridSize2>
        <GridSize1 ref={refAsanaDesc}>
          <p>
            ASANA <br />
            Meditation music stream Storage Service <br />
            Website
          </p>
          <div className="link">
            <a
              href="https://asana-streams.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW DEMO
            </a>
          </div>
          <div className="link">
            <a
              href="https://velog.io/@bbio3o/Asana-%EB%AA%85%EC%83%81-%EC%9D%8C%EC%95%85-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D-%EC%A0%80%EC%9E%A5%EC%86%8C"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW PROJECT
            </a>
          </div>
        </GridSize1>
      </Container>
    </Wrapper>
  )
}

export default forwardRef(Projects)
