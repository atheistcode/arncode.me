import React, { useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import "fontsource-oswald/400.css"
import "fontsource-oswald/700.css"
import "fontsource-roboto/400.css"
import "fontsource-roboto/700.css"

import { COLOR, FONT_SIZE, BOX_SHADOW, TRANSITION } from "../../theme/constants"
import { ANIMAION } from "../../theme/animations"

import Header from "./header"
import Drawer from "./drawer"
import Footer from "./footer"
import SEO from "./seo"

const GlobalStyles = createGlobalStyle`
/* RESET & BASE STYLES */
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

*::selection {
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
}

html {
  box-sizing: border-box;
  line-height: 1.7;
  text-rendering: optimizeSpeed;
  scroll-behavior: smooth;
  /* To make calculations easier when using rem */
  /* Add normal font later to the body element */
  font-size: 62.5%;

  @media screen and (max-width: 48em) {
  font-size: 50%;

  }
}

body {
  font-family: 'roboto', sans-serif;
  font-size: ${props => props.theme.fontSize.n}; 
}

section {
  padding: 8rem 1.5rem;
}

h1,h2,h3,h4 {
  font-family: 'oswald', sans-serif;
}

h1 {
  font-size: 4.2rem;
}

h2 {
  font-size: 3.6rem;
}

h3 {
  font-size: 3rem;
}

h4 {
  font-size: 2.4rem;
}

ul {
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  outline-width: 0;
  font: inherit;
}

input, textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Stop IE showing a scrollbar when there is no need for one */
textarea {
  overflow: auto;
}

button {
  cursor: pointer;
  line-height: 1;
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
a:active,
a:hover {
  outline-width: 0;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

const Layout = ({ children }) => {
  /* handle drawer */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    if (isDrawerOpen === false) {
      document.body.style.overflow = "hidden"
    }
    if (isDrawerOpen === true) {
      document.body.style.overflow = "initial"
    }
    setIsDrawerOpen(prevState => !prevState)
  }

  return (
    <>
      <SEO />
      <ThemeProvider
        theme={{
          color: { ...COLOR },
          fontSize: { ...FONT_SIZE },
          shadow: { ...BOX_SHADOW },
          transition: { ...TRANSITION },
          animation: { ...ANIMAION },
        }}
      >
        <GlobalStyles />
        <Header toggleDrawer={toggleDrawer} />
        <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
