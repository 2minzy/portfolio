import React, { useState } from "react"
import styled from "styled-components"
import profile from "../../public/static/minji_dark.jpg"

const Container = styled.div`
  margin: 700px 0 0 200px;

  .eng {
    margin-top: 3rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .ko {
    margin-top: 3rem;
    font-family: "S-CoreDream-3Light", sans-serif;
    line-height: 2rem;
  }
`

const Title = styled.div`
  color: grey;
  margin-bottom: 2rem;
  font-size: 6rem;
  font-family: "Monument", sans-serif;
  div {
    line-height: 5rem;
  }

  .transparent {
    -webkit-text-stroke: 0.02em #fff;
    color: transparent;
  }
`
const AboutContent = styled.div`
  display: flex;
`

const ImageContainer = styled.div`
  img {
    width: 800px;
    margin-right: 2rem;
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
`

const LanguageBox = styled.span``

const EducationContainer = styled.div`
  margin-top: 2rem;
`

const About = () => {
  const [language, setLanguage] = useState("eng")

  return (
    <Container>
      <Title>
        <div>ABOUT ME</div>
        <div className="transparent">ABOUT ME</div>
      </Title>
      <AboutContent>
        <ImageContainer>
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
              A constant learner who enjoys learning new things.
              <br />
              I strive to achieve scalable web applications with enha nced
              UI/UX.
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
          <div className="eng">
            <div>Fine Arts - Sunhwa Arts High School</div>
            <div>
              2018-2019 Exchange Student Program, Communication Design -
              Hochschule Mainz, University of Applied Sciences
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
        ) : (
          <div className="ko">
            <div>서양화과 - 선화예술고등학교</div>
            <div>
              2018-2019 교환학생 프로그램, 커뮤니케이션 디자인 - 마인츠
              공과대학교, 독일
            </div>
            <div>
              2020 대학 연합 창업 & 프로그래밍 동아리 활동 - 멋쟁이 사자처럼 8기
            </div>
            <div>조형예술학과 학사 - 서울과학기술대학교</div>
            <div>컴퓨터공학 부전공 - 서울과학기술대학교</div>
          </div>
        )}
      </EducationContainer>
    </Container>
  )
}

export default About
