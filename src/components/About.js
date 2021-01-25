import React, { useState, useEffect, useRef, forwardRef } from "react"
import styled from "styled-components"
import profile from "../../public/static/minji_dark.jpg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  margin: 800px 200px 0 200px;

  .eng {
    margin-top: 2rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    line-height: 2rem;
  }

  .ko {
    margin-top: 2rem;
    font-family: "S-CoreDream-3Light", sans-serif;
    font-size: 0.9rem;
    line-height: 2rem;
  }

  .eduEng {
    font-size: 0.9rem;
  }

  .eduKo {
    font-size: 0.8rem;
  }

  .eduTitleEng {
    font-size: 1.1rem;
  }

  .eduTitleKo {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin: 600px 50px 0 50px;

    .eng {
      font-size: 1rem;
    }

    .ko {
      font-size: 0.8rem;
    }

    .eduEng {
      font-size: 0.8rem;
    }

    .eduKo {
      font-size: 0.7rem;
    }

    .eduTitleEng {
      font-size: 1rem;
    }

    .eduTitleKo {
      font-size: 0.9rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 560px 16px 0 16px;

    .eng {
      margin: 1rem;
    }

    .ko {
      margin: 1rem;
    }
  }
`

const Title = styled.div`
  color: grey;
  margin-bottom: 2rem;
  font-size: 6rem;
  font-family: "Monument", sans-serif;
  z-index: 1;

  div {
    line-height: 5rem;
  }

  .transparent {
    -webkit-text-stroke: 0.02em #fff;
    color: transparent;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3rem;
    margin-bottom: 0;

    div {
      line-height: 3rem;
    }
  }
`

const AboutContent = styled.div`
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  img {
    width: 800px;
    margin-right: 2rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    img {
      width: 600px;
      margin-right: 0;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    img {
      width: 330px;
    }
  }

  @media ${({ theme }) => theme.device.mobileSm} {
    img {
      width: 280px;
    }
  }
`
const TextContainer = styled.div`
  span {
    margin: 0 1rem 2rem 0;
    cursor: pointer;

    &:hover {
      color: #2aaeba;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    span {
      margin-top: 500px;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    span {
      margin-top: 0;
    }
  }
`

const LanguageBox = styled.span`
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.9rem;
  }
`

const EducationContainer = styled.div`
  .eduContainer {
    display: flex;

    div {
      flex: 1;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    .eduContainer {
      margin-top: 3rem;
    }
    .div {
      justify-content: space-between;
    }
  }

  @media ${({ theme }) => theme.device.tabletSm} {
    .div {
      justify-content: space-around;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .eduContainer {
      margin-top: 1rem;
      flex-direction: column;
    }
  }
`

const EduTitle = styled.div`
  display: inline-block;
  border-bottom: 2px solid;
  padding-bottom: 3px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 1rem;
    padding-bottom: 1px;
  }
`

const About = ({ scrollToAbout }, refSection) => {
  const [language, setLanguage] = useState("ko")

  // const refSection = useRef(null)
  const refTitle = useRef(null)
  const refProfile = useRef(null)

  useEffect(() => {
    gsap.to(refTitle.current, {
      yPercent: -220,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
  }, [refSection])

  useEffect(() => {
    gsap.to(refProfile.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: refSection.current,
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    })
  }, [refSection])

  return (
    <Container ref={refSection}>
      <Title ref={refTitle}>
        <div>ABOUT ME</div>
        <div className="transparent">ABOUT ME</div>
      </Title>

      <AboutContent>
        <ImageContainer ref={refProfile}>
          <img src={profile} alt=""></img>
        </ImageContainer>
        <TextContainer>
          <LanguageBox onClick={() => setLanguage("eng")}>English</LanguageBox>
          <LanguageBox onClick={() => setLanguage("ko")}>한국어</LanguageBox>
          {language === "eng" ? (
            <div className="eng">
              I'm a Front-end developer who has diverse backgrounds such as
              <br />
              Communication Design, Fine Arts and Computer Science.
              <br />
              As a constant learner who enjoys learning new things,
              <br />
              I strive to achieve scalable web applications with enhanced UI/UX.
              <br />
              My multidisciplinary approach allows to think creatively and
              <br />
              improves communication between different departments.
            </div>
          ) : (
            <div className="ko">
              '배우기를 그만 둔 사람은 20세든 80세든 늙은 것이다.' 라는 말이
              있습니다.
              <br />
              끊임 없이 배우고 성장하는 polymath를 꿈 꾸고 있습니다.
              <br />
              새로운 기술을 습득하는 것에 빠르며, 디자인 경험을 바탕으로
              <br />
              UI/UX 관점을 고려하며 확장 가능한 웹 어플리케이션에 대해
              고민합니다.
              <br />
              저의 다양한 경험과 배경은 창의적 사고를 가능하게 하고
              <br />
              다른 부서와의 소통 능력을 향상시킵니다.
            </div>
          )}
        </TextContainer>
      </AboutContent>

      <EducationContainer>
        {language === "eng" ? (
          <div className="eduContainer">
            <div>
              <EduTitle className="eduTitleEng">Education</EduTitle>
              <div className="eng eduEng">
                <div>Fine Arts - Sunhwa Arts High School</div>
                <div>
                  2018-2019 Exchange Student Program, Communication Design -
                  Hochschule Mainz,
                  <br /> University of Applied Sciences
                </div>
                <div>
                  2020 Start-up & computer programming student club - LikeLion
                </div>
                <div>
                  BFA, Fine Arts - Seoul National University of Science and
                  Technology{" "}
                </div>
                <div>
                  Minor, Computer Science and Engineering - Seoul National
                  University of Science and Technology
                </div>
              </div>
            </div>

            <div>
              <EduTitle className="eduTitleEng">Volunteer Experience</EduTitle>
              <div className="eng eduEng">
                2019-2020 Buddy Program - International Student Club of Seoul
                National University of Science and Technology
              </div>

              <EduTitle className="eduTitleEng">Award</EduTitle>
              <div className="eng eduEng">
                2020 Exellence Awards, start-up contest by green campus town in
                Nowon{" "}
              </div>
            </div>
          </div>
        ) : (
          <div className="eduContainer">
            <div>
              <EduTitle className="eduTitleKo">교육</EduTitle>
              <div className="ko eduKo">
                <div>서양화과 - 선화예술고등학교</div>
                <div>
                  2018-2019 교환학생 프로그램, 커뮤니케이션 디자인 - 마인츠
                  공과대학교, 독일
                </div>
                <div>
                  2020 대학 연합 창업 & 프로그래밍 동아리 활동 - 멋쟁이 사자처럼
                  8기
                </div>
                <div>조형예술학과 학사 - 서울과학기술대학교</div>
                <div>컴퓨터공학 부전공 - 서울과학기술대학교</div>
              </div>
            </div>

            <div>
              <EduTitle className="eduTitleKo">봉사활동 경험</EduTitle>
              <div className="ko eduKo">
                2019-2020 외국인 유학생, 교환학생 버디 프로그램 -
                서울과학기술대학교 국제 학생회
              </div>

              <EduTitle className="eduTitleKo">수상</EduTitle>
              <div className="ko eduKo">
                2020 우수상, 노원 그린캠퍼스타운 스타트업 창업 콘테스트
              </div>
            </div>
          </div>
        )}
      </EducationContainer>
    </Container>
  )
}

export default forwardRef(About)
