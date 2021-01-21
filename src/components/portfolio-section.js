import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

import Project from "./project/project"

const Section = styled.section`
  background-color: ${props => hexToRgba(props.theme.color.secondary, "1")};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 117rem;
  margin: auto;
`
const Title = styled.h2`
  align-self: center;
  /* padding: 0.5rem 0.7rem;
  border: 0.2rem solid ${props => props.theme.color.secondary};
  border-radius: 0.2rem;
  box-shadow: ${props => props.theme.shadow.type1};
  background-color: ${props => props.theme.color.dark};
  color: ${props => props.theme.color.white}; */
`
const QuoteContainer = styled.div`
  margin: 5rem 0 5rem auto;
  text-align: right;
  overflow: hidden;
`
const Quote = styled.q`
  display: inline-block;
`
const QuoteUnderlined = styled.span`
  display: inline-block;
  padding-bottom: 0.2rem;
  border-bottom: 0.2rem solid ${props => props.theme.color.primary};
`
const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  align-items: stretch;
  gap: 2.5rem;
  margin: -1rem !important;
  padding: 2rem;
  overflow-y: hidden;
`

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          favourite_quote
        }
      }
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

  const quote = data.site.siteMetadata.favourite_quote

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
        <QuoteContainer>
          <Quote
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-duration="300"
            data-sal-delay="300"
          >
            {quote.slice(0, quote.lastIndexOf("—"))}
            {" — "}
            <QuoteUnderlined>
              {quote.slice(quote.lastIndexOf("—") + 1)}
            </QuoteUnderlined>
          </Quote>
        </QuoteContainer>
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
