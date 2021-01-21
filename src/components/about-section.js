import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

import PrimaryButton from "./shared/primary-button"
import DownloadButton from "./shared/download-button"
import SkillsCategoryContainer from "./skills-category-container"

import resume from "../assets/ahmed-rezk-resume.pdf"

const Container = styled.div`
  display: flex;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 1rem;
    background-image: linear-gradient(
      90deg,
      ${props => props.theme.color.primary} 50%,
      ${props => props.theme.color.primary} 50%
    );
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background-image: linear-gradient(
      90deg,
      ${props => props.theme.color.secondary} 50%,
      ${props => props.theme.color.primary} 50%
    );
  }
`
const SideBorder = styled.div`
  width: 1rem;
  background-image: linear-gradient(
    ${props =>
        props.right ? props.theme.color.secondary : props.theme.color.primary}
      50%,
    ${props =>
        props.right ? props.theme.color.primary : props.theme.color.secondary}
      50%
  );

  @media (max-width: 40em) {
    display: none;
  }
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  background-color: ${props => hexToRgba(props.theme.color.white, "1")};
  text-align: center;
`
const Title = styled.h2`
  margin-bottom: 2rem;
`
const Para = styled.p`
  max-width: 90rem;
  margin-bottom: 5rem;
  padding: 0 1rem;
  text-align: justify;
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
      "I found myself into coding and web developing",
      `<b>I found myself into coding and web developing</b>`
    )
    str = str.replace(
      "a self-motivated and ambitious Web Developer",
      `<b>a self-motivated and ambitious Web Developer</b>`
    )
    str = str.replace("I started work", `<b>I started work</b>`)
    setAboutMe(str)
  }, [data.site.siteMetadata.about_author])

  return (
    <Container id="about-section">
      <SideBorder />
      <Section>
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
          <DownloadButton secondary href={resume} download>
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
      <SideBorder right />
    </Container>
  )
}

export default AboutSection
