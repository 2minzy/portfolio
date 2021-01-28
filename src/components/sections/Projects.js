import React, { forwardRef } from "react"
import styled from "styled-components"
import { Wrapper } from "../layout/index"
import Title from "../Title"
import ProjectMomo from "./projects/ProjectMomo"
import ProjectSeoulite from "./projects/ProjectSeoulite"
import ProjectBungbung from "./projects/ProjectBungbung"
import ProjectAsana from "./projects/ProjectAsana"

const ProjectSection = styled(Wrapper)`
  position: relative;
  padding: 0;
`

const Projects = ({ scrollToProjects }, refSection) => {
  return (
    <Wrapper ref={refSection}>
      <ProjectSection>
        <Title text="Projects" vertical={true} float="right" />
        <ProjectMomo />
      </ProjectSection>

      <ProjectSection>
        <ProjectSeoulite />
      </ProjectSection>

      <ProjectSection>
        <Title
          text="Projects"
          vertical={true}
          float="left"
          hidden={{ mobile: true }}
        />
        <ProjectBungbung />
      </ProjectSection>

      <ProjectSection>
        <ProjectAsana />
      </ProjectSection>
    </Wrapper>
  )
}

export default forwardRef(Projects)
