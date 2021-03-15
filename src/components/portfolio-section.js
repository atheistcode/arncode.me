import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

import Project from "./project/project"

const Section = styled.section`
  border-top: 1rem solid ${props => props.theme.color.primary};
  border-bottom: 1rem solid ${props => props.theme.color.primary};
  background-color: ${props => hexToRgba(props.theme.color.white, "1")};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 120rem;
  margin: auto;
`
const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`
const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-auto-rows: minmax(28rem, 1fr);
  justify-items: center;
  gap: 3rem;
`

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            id
            title
            techs
            details
            link
            repo
            image {
              childImageSharp {
                fluid(maxWidth: 350, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section id="portfolio-section">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="300"
          data-sal-delay="300"
        >
          PORTFOLIO
        </Title>
        <ProjectsContainer>
          {data.allProjectsJson.edges.map(({ node }, index) => (
            <Project
              key={node.id}
              image={node.image.childImageSharp.fluid}
              techs={node.techs}
              details={node.details}
              title={node.title}
              link={node.link}
              repo={node.repo}
              index={index}
            />
          ))}
        </ProjectsContainer>
      </Container>
    </Section>
  )
}

export default PortfolioSection
