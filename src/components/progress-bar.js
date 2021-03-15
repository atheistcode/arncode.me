import React, { useState } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Reveal"

const Container = styled.div`
  width: 100%;
  min-height: 2.6rem;
  border: 0.1rem solid ${props => props.theme.color.black};
  border-radius: 0.4rem;
  background-color: ${props => props.theme.color.light};
`
const Completed = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.completed};
  border-radius: 0.4rem;
  background-color: ${props => props.theme.color.dark};
  padding: 0.2rem 1rem;
  color: ${props => props.theme.color.white};
  white-space: pre;
  ${props => props.theme.animation.width};

  & > *:nth-child(2) {
    margin-left: 2rem;
    color: ${props => props.theme.color.secondary};
    ${props => props.theme.animation.display};
  }
`

const ProgressBar = ({ tagName, completed }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container>
      <Fade onReveal={() => setIsVisible(true)}>
        {isVisible && (
          <Completed tagName={tagName} completed={completed}>
            <span>{tagName}</span>
            <span>{`${completed}`}</span>
          </Completed>
        )}
      </Fade>
    </Container>
  )
}

export default ProgressBar
