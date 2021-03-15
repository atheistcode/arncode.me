import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const StyledCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: 0;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  width: 100%;
  border-top: 0.2rem solid ${props => props.theme.color.dark};
  background-color: ${props => props.theme.color.primary};
  padding: 1.2rem 0.8rem;
  color: ${props => props.theme.color.white};
  transition: ${props => props.theme.transition.normal};
`
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 0 1rem;
  }
`
const VisitIcon = styled(FontAwesomeIcon).attrs({ icon: faLink })`
  transform: translateY(100%);
  cursor: pointer;
  font-size: 2rem;
  transition: ${props => props.theme.transition.normal};
  transition-delay: 120ms;
`
const GithubIcon = styled(FontAwesomeIcon).attrs({ icon: faGithub })`
  transform: translateY(100%);
  cursor: pointer;
  font-size: 2rem;
  transition: ${props => props.theme.transition.normal};
  transition-delay: 160ms;
`

const Caption = ({ title, link, repo, className }) => {
  return (
    <StyledCaption className={className}>
      <h4>{title}</h4>
      <IconsContainer>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <VisitIcon />
        </a>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </IconsContainer>
    </StyledCaption>
  )
}

export default Caption
