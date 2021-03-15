import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"
import hexToRgba from "hex-to-rgba"

import PrimaryButton from "./shared/primary-button"

const Background = ({ image, children, className }) => {
  return (
    <BackgroundImage tag="div" fluid={image} className={className}>
      {children}
    </BackgroundImage>
  )
}

const StyledBackground = styled(Background)`
  background-attachment: fixed;

  @media (max-width: 50em) {
    background-attachment: scroll !important;
    &::after,
    &::before {
      background-attachment: scroll !important;
    }
  }
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${props => props.height};
  line-height: 1.5;
  background-color: ${props => hexToRgba(props.theme.color.dark, "0.75")};
  padding: 2rem 1.5rem;
  color: ${props => props.theme.color.white};
  text-align: center;
`
const AvatarWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  margin-top: auto;
  margin-bottom: 4rem;
  border: 0.4rem solid ${props => props.theme.color.white};
  border-radius: 50%;
  overflow: hidden;
  filter: brightness(160%);
`
const Avatar = styled(Img)`
  margin-top: -0.5rem;
  margin-left: -1.2rem;
`
const Heading1 = styled.h1`
  margin-bottom: 1rem;
`
const Heading2 = styled.h2`
  margin-bottom: 4rem;

  & > span {
    color: ${props => props.theme.color.primary};
  }
`
const ContactsContainer = styled.div``
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 8rem;
  margin: 0 auto 3rem auto;
`
const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2.6rem;
  max-height: 2.6rem;
  overflow: hidden;
`
const ContactsIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  transition: ${props => props.theme.transition.quick};

  &:hover {
    color: ${props => props.theme.color.primary};
  }
`
const Credits = styled.span`
  margin-top: auto;
  color: ${props => hexToRgba(props.theme.color.white, "0.25")};
  font-size: ${props => props.theme.fontSize.xs};
`

const IntroSection = () => {
  const [sectionHeight, setSectionHeight] = useState("992px")

  useEffect(() => setSectionHeight(window.innerHeight + 40 + "px"), [])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linkedin
          github
        }
      }
      bg: file(relativePath: { eq: "images/introbg.webp" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledBackground image={data.bg.childImageSharp.fluid}>
      <Section id="intro-section" height={sectionHeight}>
        <AvatarWrapper
          data-sal="slide-right"
          data-sal-easing="ease"
          data-sal-duration="300"
          data-sal-delay="600"
        >
          <Avatar fixed={data.avatar.childImageSharp.fixed} alt="Me" />
        </AvatarWrapper>

        <Heading1
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="300"
        >
          Welcome!
        </Heading1>

        <Heading2
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="300"
          data-sal-delay="300"
        >
          I'm Ahmed Rezk. A <span>Web Developer.</span>
        </Heading2>

        <ContactsContainer
          data-sal="slide-left"
          data-sal-easing="ease"
          data-sal-duration="300"
          data-sal-delay="600"
        >
          <IconsContainer>
            <IconWrapper
              href={data.site.siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactsIcon icon={faLinkedin} />
            </IconWrapper>
            <IconWrapper
              href={data.site.siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactsIcon icon={faGithub} />
            </IconWrapper>
          </IconsContainer>

          <PrimaryButton onClick={() => scrollTo("#contact-section")}>
            Contact Me
          </PrimaryButton>
        </ContactsContainer>

        <Credits>
          Photo by{" "}
          <a
            href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            NASA
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </Credits>
      </Section>
    </StyledBackground>
  )
}

export default IntroSection
