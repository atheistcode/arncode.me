import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ProjectBackground = ({ image, className, children }) => {
  return (
    <BackgroundImage
      tag="div"
      className={className}
      fluid={image}
      backgroundColor={`rgba(0,0,0,0.1)`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledProjectBackground = styled(ProjectBackground)`
  background-position: top center;
`

export default StyledProjectBackground
