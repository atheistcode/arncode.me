import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import StyledProjectBackground from "./background"
import Description from "./description"
import Caption from "./caption"

const TransitionedCaption = styled(Caption)``
const TransitionedDescription = styled(Description)``

const Container = styled(StyledProjectBackground)`
  width: 100%;
  max-width: 40rem;
  height: 100%;
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.shadow.type1};
  overflow: hidden;

  &:hover
    ${TransitionedDescription},
    &:focus
    ${TransitionedDescription},
    &:active
    ${TransitionedDescription} {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover
    ${TransitionedCaption},
    &:focus
    ${TransitionedCaption},
    &:active
    ${TransitionedCaption},
    &:hover
    ${TransitionedCaption}
    a
    > *,
  &:focus ${TransitionedCaption} a > *,
  &:active ${TransitionedCaption} a > * {
    opacity: 1;
    transform: translateY(0);
  }
`

const Project = ({ image, techs, details, title, link, repo, index }) => {
  return (
    <Fade top duration={500} delay={Number(index * 250 + 300)}>
      <Container image={image}>
        <TransitionedDescription techs={techs} details={details} />
        <TransitionedCaption title={title} link={link} repo={repo} />
      </Container>
    </Fade>
  )
}

export default Project
