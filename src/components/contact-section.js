import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import hexToRgba from "hex-to-rgba"

import PrimaryButton from "./shared/primary-button"

const Background = ({ image, children, className }) => {
  return (
    <BackgroundImage
      id="contact-section"
      tag="section"
      fluid={image}
      className={className}
    >
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
const ContactCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: ${props => hexToRgba(props.theme.color.light, "0.8")};
  color: ${props => props.theme.color.black};

  & > * {
    ${props => props.theme.animation.display};
  }
`
const Title = styled.h2`
  text-align: center;
`
const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  & > * {
    flex: 1 1 0;
    min-width: 17rem;
  }

  & span {
    white-space: pre;
  }
`
const Option = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.5rem;
`
const IconWrapper = styled.span`
  display: inline-block;
  max-width: 2.6rem;
  max-height: 2.6rem;
  overflow: hidden;
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`
const Form = styled.form`
  max-width: 65rem;

  & > *:last-child {
    width: 100%;
  }
`
const Input = styled.input`
  min-width: 20rem;
  width: 49.2%;
  margin-bottom: 1rem;
  border: 0.1rem solid ${props => props.theme.color.light};
  border-radius: 0.4rem;
  padding: 1rem 1.5rem;
  transition: ${props => props.theme.transition.quick};

  &:focus {
    border-color: ${props => props.theme.color.primary};
  }

  &[type="email"] {
    margin-left: 1rem;
  }

  @media (max-width: 35.625em) {
    width: 100%;

    &[type="email"] {
      margin-left: 0;
    }
  }
`
const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  min-height: 20rem;
  margin-bottom: 2rem;
  border: 0.1rem solid ${props => props.theme.color.light};
  border-radius: 0.4rem;
  padding: 0.7rem 1.5rem;
  transition: ${props => props.theme.transition.quick};

  &:focus {
    border-color: ${props => props.theme.color.primary};
  }
`
const Credits = styled.span`
  position: absolute;
  bottom: 1rem;
  color: ${props => hexToRgba(props.theme.color.white, "0.15")};
  font-size: ${props => props.theme.fontSize.xs};
`

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "images/contactbg-min.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          phone
          location
          email
        }
      }
    }
  `)

  return (
    <StyledBackground image={data.bg.childImageSharp.fluid}>
      <ContactCard>
        <Title
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="300"
          data-sal-delay="300"
        >
          Thanks for taking the time to reach out.
        </Title>
        <OptionsContainer
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="300"
          data-sal-delay="300"
        >
          <Option>
            <IconWrapper>
              <Icon icon={faMapMarkedAlt} />
            </IconWrapper>
            <span>{data.site.siteMetadata.location}</span>
          </Option>
          <Option>
            <IconWrapper>
              <Icon icon={faEnvelope} />
            </IconWrapper>
            <span>{data.site.siteMetadata.email}</span>
          </Option>
          <Option>
            <IconWrapper>
              <Icon icon={faPhoneAlt} />
            </IconWrapper>
            <span>{data.site.siteMetadata.phone}</span>
          </Option>
        </OptionsContainer>
        <Form
          method="POST"
          name="contact"
          data-netlify="true"
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="300"
          data-sal-delay="300"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Textarea placeholder="Message..." name="message" required />
          <PrimaryButton type={"submit"}>SEND MESSAGE</PrimaryButton>
        </Form>
        <Credits>
          Photo by{" "}
          <a
            href="https://unsplash.com/@michael_exploring?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michael Descharles
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
      </ContactCard>
    </StyledBackground>
  )
}

export default ContactSection
