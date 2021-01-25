import React, { useEffect, useRef, forwardRef } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  margin-top: 400px;
  font-family: "Suisse Intl", sans-serif;
  font-size: 0.9rem;

  .projectContainer {
    display: flex;
  }

  .momoDetail {
    margin-left: 2rem;
  }

  .link {
    width: 140px;
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

  .projectCContainer {
    margin-left: 600px;
    display: flex;
    align-items: center;

    .description {
      margin: 1000px 100px 0 0;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    .projectCContainer {
      margin-left: 120px;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    .projectCContainer {
      margin-left: 40px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;

    .projectCContainer {
      margin-left: 0px;
      margin-right: 1rem;
      flex-direction: column-reverse;

      .description {
        margin: 100px 0 0 0;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.7rem;

    .projectCContainer {
      margin-left: 0px;
      margin-right: 1rem;
      flex-direction: column-reverse;

      .description {
        margin: 100px 0 0 0;
      }
    }
  }
`

const Title = styled.div`
  color: grey;
  position: absolute;
  z-index: 1;
  margin-left: 1500px;
  font-size: 6rem;
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
    margin-left: 800px;
    font-size: 4rem;
    div {
      line-height: 4rem;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    margin-left: 600px;
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
  margin: 1000px 0 0 200px;
  color: grey;
  font-size: 6rem;
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
    margin: 500px 0 0 100px;
    font-size: 4rem;
    div {
      line-height: 4rem;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    margin: 500px 0 0 50px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`

const ProjectA = styled.div`
  position: relative;
  display: flex;
  margin-bottom: -200px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: -100px;
  }
`

const ProjectA1 = styled.div`
  img {
    margin-top: 200px;
    width: 1000px;
    object-fit: cover;
  }

  .description {
    margin: 100px;
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    img {
      width: 700px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 360px;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    img {
      width: 300px;
    }

    .description {
      margin: 50px;
    }
  }
`

const ProjectA2 = styled.div`
  margin-top: 300px;
  img {
    width: 500px;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`
const ProjectA3 = styled.div`
  img {
    width: 500px;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

const ProjectB1 = styled.div`
  display: flex;
  align-items: center;

  img {
    margin: 0 300px;
    position: relative;
    width: 600px;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;

    img {
      margin-top: -200px;
    }

    .description {
      margin-top: 300px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-right: 1rem;
    img {
      width: 320px;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    img {
      width: 300px;
    }
  }
`

const ProjectC1 = styled.div`
  img {
    margin-top: 200px;
    position: relative;
    width: 800px;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.tablet} {
    img {
      width: 600px;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    img {
      width: 460px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 340px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 300px;
    }
  }
`

const ProjectC2 = styled.div`
  img {
    position: relative;
    width: 800px;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.tablet} {
    img {
      width: 600px;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    img {
      width: 460px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 340px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 300px;
    }
  }
`

const ProjectD1 = styled.div`
  margin-top: 400px;
  display: flex;
  align-items: center;

  img {
    position: relative;
    width: 1000px;
    object-fit: cover;
  }

  .description {
    margin: 150px 0 0 300px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;

    img {
      margin-right: 1rem;
      width: 1000px;
    }

    .description {
      margin: 0 0 50px 0;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    img {
      width: 700px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 340px;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    img {
      width: 300px;
    }
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
    <Container ref={refSection}>
      <Title ref={refTitle}>
        <div>PROJECTS</div>
        <div className="transparent">PROJECTS</div>
      </Title>

      <div className="projectContainer">
        <ProjectA>
          <ProjectA1 ref={refImage1}>
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
          </ProjectA1>
        </ProjectA>

        <div className="momoDetail" ref={refImage2}>
          <ProjectA2>
            <img src={"../../images/momoShop.jpg"} alt="" />
          </ProjectA2>
          <ProjectA3>
            <img src={"../../images/momoPayment.jpg"} alt="" />
          </ProjectA3>
        </div>
      </div>

      <ProjectB1>
        <div>
          <img src={"../../images/seoulLanding.jpg"} alt="" ref={refImage3} />
        </div>
        <div className="description" ref={refSeoulDesc}>
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
        </div>
      </ProjectB1>

      <Title2 ref={refTitle2}>
        <div className="transparent">PROJECTS</div>
        <div>PROJECTS</div>
      </Title2>

      <div className="projectCContainer">
        <div className="description">
          <p>
            BUNGBUNG <br />
            Kids Mobility Service <br />
            Mobile UI/UX
          </p>
        </div>

        <div>
          <ProjectC1 ref={refImageT}>
            <img src={"../../images/uiA.jpg"} alt="" />
          </ProjectC1>
          <ProjectC2 ref={refImage4}>
            <img src={"../../images/uiB.jpg"} alt="" />
          </ProjectC2>
        </div>
      </div>

      <ProjectD1>
        <div ref={refImage5}>
          <img src={"../../images/asanaLanding.jpg"} alt="" />
        </div>

        <div className="description" ref={refAsanaDesc}>
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
        </div>
      </ProjectD1>
    </Container>
  )
}

export default forwardRef(Projects)
