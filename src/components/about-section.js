import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

import PrimaryButton from "./shared/primary-button"
import DownloadButton from "./shared/download-button"
import SkillsCategoryContainer from "./skills-category-container"

// import resume from "../assets/ahmed-rezk-resume.pdf"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1rem solid ${props => props.theme.color.primary};
  background-color: ${props => hexToRgba(props.theme.color.light, "0.6")};
`
const Title = styled.h2`
  margin-bottom: 2rem;
`
const Para = styled.p`
  max-width: 90rem;
  margin-bottom: 5rem;
  padding: 0 1rem;
  white-space: pre-wrap;
`
const BtnsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 5rem;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
`

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about_author
        }
      }
      allSkillsJson {
        edges {
          node {
            category
            skills {
              skill
              percentage
            }
          }
        }
      }
    }
  `)

  const [aboutMe, setAboutMe] = useState()

  useEffect(() => {
    let str = data.site.siteMetadata.about_author.replace(
      "Self-motivated and ambitious Web Developer",
      `<b>Self-motivated and ambitious Web Developer</b>`
    )
    str = str.replace("I started work", `<b>I started work</b>`)
    str = str.replace(
      "I found myself into programming",
      `<b>I found myself into programming</b>`
    )
    setAboutMe(str)
  }, [data.site.siteMetadata.about_author])

  return (
    <Section id="about-section">
      <Title
        data-sal="slide-down"
        data-sal-easing="ease"
        data-sal-duration="300"
        data-sal-delay="300"
      >
        ABOUT ME
      </Title>
      <Para
        data-sal="slide-down"
        data-sal-easing="ease"
        data-sal-duration="300"
        data-sal-delay="300"
        dangerouslySetInnerHTML={{ __html: aboutMe }}
      ></Para>
      <BtnsContainer>
        <PrimaryButton href="#portfolio-section">MY PORTFOLIO</PrimaryButton>
        <DownloadButton secondary>
          MY RESUME
        </DownloadButton>
      </BtnsContainer>
      <SkillsContainer>
        {data.allSkillsJson.edges.map(({ node }, index) => (
          <SkillsCategoryContainer
            key={index}
            category={node.category}
            skills={node.skills}
          />
        ))}
      </SkillsContainer>
    </Section>
  )
}

export default AboutSection
