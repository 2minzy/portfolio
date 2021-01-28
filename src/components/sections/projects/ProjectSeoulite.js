import React, { useRef, useEffect } from "react"
import { Column, Container, Row } from "../../layout/index"
import OutlinedButton from "../../OutlinedButton"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProjectSeoulite = () => {
  const refStart = useRef(null)
  const refImage = useRef(null)

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter2 = gsap.quickSetter(refImage.current, "skewY", "deg"),
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
  }, [refStart])

  return (
    <Container ref={refStart}>
      <Column size="2">
        <img src={"../../images/seoulLanding.jpg"} alt="" ref={refImage} />
      </Column>
      <Column>
        <Row>
          <p>
            SEOULITE <br />
            Seoul wifi map <br />
            Website
          </p>
          <OutlinedButton
            href="https://seoulite.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW DEMO
          </OutlinedButton>
          <OutlinedButton
            href="https://velog.io/@bbio3o/Project-Seoulite-%EC%84%9C%EC%9A%B8%EC%8B%9C-wifi-%EC%9C%84%EC%B9%98-%EC%A7%80%EB%8F%84-%EC%95%B1-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%A7%80%EB%8F%84-API-%EC%84%9C%EC%9A%B8-%EC%97%B4%EB%A6%B0%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B4%91%EC%9E%A5-%ED%99%9C%EC%9A%A9"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </OutlinedButton>
        </Row>
      </Column>
    </Container>
  )
}

export default ProjectSeoulite
