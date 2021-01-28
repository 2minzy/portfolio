import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { Container, Column, Row } from "../../layout/index"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Description = styled(Row)`
  align-items: flex-end;

  @media ${({ theme }) => theme.device.mobile} {
    align-items: flex-start;
  }
`

const ProjectBungbung = () => {
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
    <Container mobileDirection="column-reverse" ref={refStart}>
      <Column>
        <Description>
          <p>
            BUNGBUNG <br />
            Kids Mobility Service <br />
            Mobile UI/UX
          </p>
        </Description>
      </Column>
      <Column size="2" ref={refImage}>
        <img src={"../../images/uiA.jpg"} alt="bungbung design" />
        <img src={"../../images/uiB.jpg"} alt="bungbung design" />
      </Column>
    </Container>
  )
}

export default ProjectBungbung
