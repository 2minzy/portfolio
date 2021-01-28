import React, { useRef, useEffect } from "react"
import { Column, Container, Row } from "../../layout/index"
import OutlinedButton from "../../OutlinedButton"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProjectAsana = () => {
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
        <img
          src={"../../images/asanaLanding.jpg"}
          alt="asana landing page"
          ref={refImage}
        />
      </Column>
      <Column>
        <Row>
          <p>
            ASANA <br />
            Meditation music stream Storage Service <br />
            Website
          </p>
          <OutlinedButton
            href="https://asana-streams.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW DEMO
          </OutlinedButton>
          <OutlinedButton
            href="https://velog.io/@bbio3o/Asana-%EB%AA%85%EC%83%81-%EC%9D%8C%EC%95%85-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D-%EC%A0%80%EC%9E%A5%EC%86%8C"
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

export default ProjectAsana
