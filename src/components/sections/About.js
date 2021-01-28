import React, { useState, useEffect, useRef, forwardRef } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Wrapper, Container, Column, Row } from "../layout/index"
import Title from "../Title"
import LinkButton from "../LinkButton"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const AboutWrapper = styled(Wrapper)`
  position: relative;

  p {
    line-height: 2;
  }
`

const About = ({ scrollToAbout }, refSection) => {
  const [language, setLanguage] = useState("ko")

  const refProfile = useRef(null)

  useEffect(() => {
    gsap.to(refProfile.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,
        scrub: true,
      },
    })
  }, [refSection])

  return (
    <AboutWrapper ref={refSection}>
      <Title text="About Me" />
      <Wrapper
        maxWidth="auto"
        marginBottom="4rem"
        padding="0"
        style={{ zIndex: -1, position: "relative" }}
      >
        <Container column="column">
          <Column size="2">
            <img src={"../../images/minji_dark.jpg"} alt="" ref={refProfile} />
          </Column>
          <Column>
            {/* <TextContainer> */}
            <LinkButton onClick={() => setLanguage("eng")}>English</LinkButton>
            <LinkButton onClick={() => setLanguage("ko")}>한국어</LinkButton>
            {language === "eng" ? (
              <p>
                I'm a Front-end developer who has diverse backgrounds such as
                <br />
                Communication Design, Fine Arts and Computer Science.
                <br />
                As a constant learner who enjoys learning new things,
                <br />
                I strive to achieve scalable web applications with enhanced
                UI/UX.
                <br />
                My multidisciplinary approach allows to think creatively and
                <br />
                improves communication between different departments.
              </p>
            ) : (
              <p>
                '배우기를 그만둔 사람은 20세든 80세든 늙은 것이다.'라는 말이
                있습니다.
                <br />
                끊임없이 배우고 성장하는 polymath를 꿈꾸고 있습니다.
                <br />
                새로운 기술을 습득하는 것에 빠르며, 디자인 경험을 바탕으로
                <br />
                UI/UX 관점을 고려하며 확장 가능한 웹 애플리케이션에 대해
                고민합니다.
                <br />
                저의 다양한 경험과 배경은 창의적 사고를 가능하게 하고
                <br />
                다른 부서와의 소통 능력을 향상합니다.
              </p>
            )}
            {/* </TextContainer> */}
          </Column>
        </Container>
      </Wrapper>
      <Wrapper maxWidth="auto" marginBottom="0" padding="0">
        {language === "eng" ? (
          <Container column="column" alignItems="flex-start">
            <Column>
              <Row>
                <h3>Education</h3>

                <p>Fine Arts - Sunhwa Arts High School</p>
                <p>
                  2018-2019 Exchange Student Program, Communication Design -
                  Hochschule Mainz,
                  <br /> University of Applied Sciences
                </p>
                <p>
                  2020 Start-up & computer programming student club - LikeLion
                </p>
                <p>
                  BFA, Fine Arts - Seoul National University of Science and
                  Technology
                </p>
                <p>
                  Minor, Computer Science and Engineering - Seoul National
                  University of Science and Technology
                </p>
              </Row>
            </Column>

            <Column>
              <Row margin="0 0 2rem 0">
                <h3>Volunteer Experience</h3>
                <p>
                  2019-2020 Buddy Program - International Student Club of Seoul
                  National University of Science and Technology
                </p>
              </Row>
              <Row>
                <h3>Award</h3>
                <p>
                  2020 Exellence Awards, start-up contest by green campus town
                  in Nowon
                </p>
              </Row>
            </Column>
          </Container>
        ) : (
          <Container column="column" alignItems="flex-start">
            <Column>
              <Row>
                <h3>교육</h3>
                <p>서양화과 - 선화예술고등학교</p>
                <p>
                  2018-2019 교환학생 프로그램, 커뮤니케이션 디자인 - 마인츠
                  공과대학교, 독일
                </p>
                <p>
                  2020 대학 연합 창업 &amp; 프로그래밍 동아리 활동 - 멋쟁이
                  사자처럼 8기
                </p>
                <p>조형예술학과 학사 - 서울과학기술대학교</p>
                <p>컴퓨터공학 부전공 - 서울과학기술대학교</p>
              </Row>
            </Column>
            <Column>
              <Row margin="0 0 2rem 0">
                <h3>봉사활동 경험</h3>
                <p>
                  2019-2020 외국인 유학생, 교환학생 버디 프로그램 -
                  서울과학기술대학교 국제 학생회
                </p>
              </Row>

              <Row>
                <h3>수상</h3>
                <p>2020 우수상, 노원 그린캠퍼스타운 스타트업 창업 콘테스트</p>
              </Row>
            </Column>
          </Container>
        )}
      </Wrapper>
    </AboutWrapper>
  )
}

export default forwardRef(About)
