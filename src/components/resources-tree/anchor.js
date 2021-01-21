import React from "react"
import styled from "styled-components"

const StyledAnchor = styled.a`
  display: inline-block;
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme.color.primary};
    font-weight: bold;
  }
`

const Anchor = ({ href, name, className }) => {
  return (
    <StyledAnchor
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </StyledAnchor>
  )
}

export default Anchor
