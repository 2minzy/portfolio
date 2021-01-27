import React, { useEffect, useRef, forwardRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Wrapper, Container, Column } from "../layout/index"
import Title from "../Title"
import ProjectMomo from "./projects/ProjectMomo"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const ImageContainer = styled.div`
  max-width: 70%;
  margin: auto;

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 100%;
  }
`

const ProjectSection = styled(Wrapper)`
  position: relative;
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
  const refImage2 = useRef(null)
  const refImage3 = useRef(null)
  const refSeoulDesc = useRef(null)
  const refImageT = useRef(null)
  const refImage4 = useRef(null)
  const refImage5 = useRef(null)
  const refAsanaDesc = useRef(null)

  {
    /** useEffect(() => {
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
  }, [])*/
  }

  return (
    <Wrapper ref={refSection}>
      <ProjectSection>
        <Title text="Projects" vertical={true} float="right" ref={refTitle} />
        <ProjectMomo />
      </ProjectSection>

      <ProjectSection>
        <Container>
          <Column size="2">
            <ImageContainer>
              <img
                src={"../../images/seoulLanding.jpg"}
                alt=""
                ref={refImage3}
              />
            </ImageContainer>
          </Column>
          <Column>
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
          </Column>
        </Container>
      </ProjectSection>
      <ProjectSection>
        <Title text="Projects" vertical={true} float="left" ref={refTitle2} />

        <Container>
          <Column>
            <Description>
              <p>
                BUNGBUNG <br />
                Kids Mobility Service <br />
                Mobile UI/UX
              </p>
            </Description>
          </Column>
          <Column size="2">
            <img src={"../../images/uiA.jpg"} alt="" ref={refImageT} />
            <img src={"../../images/uiB.jpg"} alt="" ref={refImage4} />
          </Column>
        </Container>
      </ProjectSection>

      <ProjectSection>
        <Container>
          <Column size="2">
            <img src={"../../images/asanaLanding.jpg"} alt="" ref={refImage5} />
          </Column>
          <Column>
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
          </Column>
        </Container>
      </ProjectSection>
    </Wrapper>
  )
}

export default forwardRef(Projects)
