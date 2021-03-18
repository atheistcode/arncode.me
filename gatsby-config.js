require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Arncode.me",
    description: "Personal Portfolio Website ✈️",
    siteUrl: "https://arncode.me",
    image: "/apple-touch-icon.png",
    author: "Ahmed Rezk",
    about_author: `Hello! I am Ahmed Rezk, a self-taught web developer, passionate about programming and love building modern performant web applications.\nI started work as a financial auditor for seven years with multiple reputable companies in Home country and abroad. I found myself into coding and programming so I decided to follow my passion and currently I enjoy what I am doing.`,
    email: "ahmed@arncode.me",
    phone: "+20 102 711 3447",
    location: "Cairo, Egypt",
    github: "https://github.com/ahmile",
    linkedin: "https://www.linkedin.com/in/ahmile",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        enterEventName: "sal:in",
        exitEventName: "sal:out",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
  ],
}
