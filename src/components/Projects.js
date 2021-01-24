import React, { useEffect, useRef, forwardRef } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import momoLanding from "../../public/static/momoLanding.jpg"
import momoShop from "../../public/static/momoShop.jpg"
import momoPayment from "../../public/static/momoPayment.jpg"
import asanaLanding from "../../public/static/asanaLanding.jpg"
import seoulLanding from "../../public/static/seoulLanding.jpg"
import uiA from "../../public/static/uiA.jpg"
import uiB from "../../public/static/uiB.jpg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  margin-top: 400px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;

  .projectContainer {
    display: flex;
  }

  .momoDetail {
    margin-left: 2rem;
  }

  .link {
    width: 150px;
    border: 1px solid;
    text-align: center;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
      a {
        color: black;
      }
      background-color: white;
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
`

const ProjectA = styled.div`
  position: relative;
  display: flex;
  margin-bottom: -200px;
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
`

const ProjectA2 = styled.div`
  margin-top: 300px;
  img {
    width: 500px;
    object-fit: cover;
  }
`
const ProjectA3 = styled.div`
  img {
    width: 500px;
    object-fit: cover;
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
`

const ProjectC1 = styled.div`
  img {
    margin-top: 200px;
    position: relative;
    width: 800px;
    object-fit: cover;
  }
`

const ProjectC2 = styled.div`
  img {
    position: relative;
    width: 800px;
    object-fit: cover;
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
            <img src={momoLanding} alt="" />
            <div className="description">
              <p>
                MOMO <br />
                E-commerce Fashion Store <br />
                Website
              </p>
              <div className="link">
                <a href="/">VIEW PROJECT</a>
              </div>
              <div className="link">
                <a
                  href="https://momostores.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW DEMO
                </a>
              </div>
            </div>
          </ProjectA1>
        </ProjectA>

        <div className="momoDetail" ref={refImage2}>
          <ProjectA2>
            <img src={momoShop} alt="" />
          </ProjectA2>
          <ProjectA3>
            <img src={momoPayment} alt="" />
          </ProjectA3>
        </div>
      </div>

      <ProjectB1>
        <div>
          <img src={seoulLanding} alt="" ref={refImage3} />
        </div>
        <div className="description" ref={refSeoulDesc}>
          <p>
            SEOULITE <br />
            Seoul wifi map <br />
            Website
          </p>
          <div className="link">
            <a href="/">VIEW PROJECT</a>
          </div>
          <div className="link">
            <a href="/">VIEW DEMO</a>
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
            <img src={uiA} alt="" />
          </ProjectC1>
          <ProjectC2 ref={refImage4}>
            <img src={uiB} alt="" />
          </ProjectC2>
        </div>
      </div>

      <ProjectD1>
        <div ref={refImage5}>
          <img src={asanaLanding} alt="" />
        </div>

        <div className="description" ref={refAsanaDesc}>
          <p>
            ASANA <br />
            Meditation music streaming service <br />
            Website
          </p>
          <div className="link">
            <a href="/">VIEW PROJECT</a>
          </div>
          <div className="link">
            <a href="/">VIEW DEMO</a>
          </div>
        </div>
      </ProjectD1>
    </Container>
  )
}

export default forwardRef(Projects)
