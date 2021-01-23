import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import momoLanding from "../../public/static/momoLanding.jpg"
import momoShop from "../../public/static/momoShop.jpg"
import momoPayment from "../../public/static/momoPayment.jpg"
import asanaLanding from "../../public/static/asanaLanding.jpg"
import seoulLanding from "../../public/static/seoulLanding.jpg"
import uiA from "../../public/static/uiA.jpg"
import uiB from "../../public/static/uiB.jpg"

const Container = styled.div`
  margin-top: 200px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;

  .projectContainer {
    display: flex;
  }

  .momoDetail {
    margin-left: 3rem;
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
const ProjectA1 = styled.div`
  img {
    margin-top: 200px;
    position: relative;
    width: 1000px;
    object-fit: cover;
  }

  .description {
    margin: 100px;
  }
`

const Title = styled.div`
  position: absolute;
  color: grey;
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
  margin: 200px 0 0 200px;
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

const ProjectA2 = styled.div`
  img {
    margin-top: 500px;
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
  margin-top: 200px;
  align-items: center;

  img {
    margin: 0 300px 0 300px;
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
    margin-top: 0;
    position: relative;
    width: 800px;
    object-fit: cover;
  }
`

const ProjectD1 = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-top: 200px;
    position: relative;
    width: 1000px;
    object-fit: cover;
  }

  .description {
    margin: 150px 0 0 300px;
  }
`

const Projects = () => {
  return (
    <Container>
      <Title>
        <div>PROJECTS</div>
        <div className="transparent">PROJECTS</div>
      </Title>

      <div className="projectContainer">
        <ProjectA1>
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
              <a href="/" target="_blank">
                VIEW DEMO
              </a>
            </div>
          </div>
        </ProjectA1>

        <div className="momoDetail">
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
          <img src={seoulLanding} alt="" />
        </div>
        <div className="description">
          <p>
            SEOULITE <br />
            Seoul wifi map <br />
            Website
          </p>
          <div className="link">
            <a href="/">VIEW PROJECT</a>
          </div>
          <div className="link">
            <a href="/" target="_blank">
              VIEW DEMO
            </a>
          </div>
        </div>
      </ProjectB1>

      <Title2>
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
          <ProjectC1>
            <img src={uiA} alt="" />
          </ProjectC1>
          <ProjectC2>
            <img src={uiB} alt="" />
          </ProjectC2>
        </div>
      </div>

      <ProjectD1>
        <div>
          <img src={asanaLanding} alt="" />
        </div>

        <div className="description">
          <p>
            SEOULITE <br />
            Seoul wifi map <br />
            Website
          </p>
          <div className="link">
            <a href="/">VIEW PROJECT</a>
          </div>
          <div className="link">
            <a href="/" target="_blank">
              VIEW DEMO
            </a>
          </div>
        </div>
      </ProjectD1>
    </Container>
  )
}

export default Projects
