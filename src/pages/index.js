import React from "react"

import IntroSection from "../components/intro-section"
import AboutSection from "../components/about-section"
import PortfolioSection from "../components/portfolio-section"
import ContactSection from "../components/contact-section"

export default function Index() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}
