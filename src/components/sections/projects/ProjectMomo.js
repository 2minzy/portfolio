import React, { useRef, useEffect } from "react"
import { Column, Container, Row } from "../../layout/index"
import OutlinedButton from "../../OutlinedButton"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProjectMomo = () => {
  const refStart = useRef(null)
  const refImage1 = useRef(null)
  const refImage2 = useRef(null)

  useEffect(() => {
    gsap.to(refImage2.current, {
      yPercent: -60,
      ease: "none",
      scrollTrigger: {
        trigger: refStart.current,
        scrub: true,
      },
    })
  }, [refStart])

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(refImage1.current, "skewY", "deg"),
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

    gsap.set(refImage1.current, {
      transformOrigin: "left center",
      force3D: true,
    })
  }, [refStart])

  return (
    <Container ref={refStart}>
      <Column size="3">
        <Row margin="0 0 2rem 0">
          <img src={"../../images/momoLanding.jpg"} alt="" ref={refImage1} />
        </Row>
        <Row>
          <p>
            MOMO <br />
            E-commerce Fashion Store <br />
            Website
          </p>
          <OutlinedButton
            href="https://momostores.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW DEMO
          </OutlinedButton>
          <OutlinedButton
            href="https://velog.io/@bbio3o/MOMO-%EC%98%A8%EB%9D%BC%EC%9D%B8-%ED%8C%A8%EC%85%98-E-commerce-%EC%87%BC%ED%95%91%EB%AA%B0"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </OutlinedButton>
        </Row>
      </Column>
      <Column hidden={{ tablet: true, mobile: true }} ref={refImage2}>
        <img src={"../../images/momoShop.jpg"} alt="momo shop" />
        <img src={"../../images/momoPayment.jpg"} alt="momo payment" />
      </Column>
    </Container>
  )
}

export default ProjectMomo
