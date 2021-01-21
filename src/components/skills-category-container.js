import React from "react"
import styled from "styled-components"

import ProgressBar from "./progress-bar"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem;

  & > * {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 2rem;
  }
`

const SkillsCategoryContainer = ({ category, skills }) => {
  return (
    <Container>
      <h3>{category}</h3>
      {skills.map((node, index) => (
        <ProgressBar
          key={index}
          tagName={node.skill}
          completed={node.percentage}
        />
      ))}
    </Container>
  )
}

export default SkillsCategoryContainer
