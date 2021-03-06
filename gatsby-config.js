require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "AHMDRZK",
    description: "Personal Portfolio Website ✈️",
    siteUrl: "https://ahmdrzk.netlify.app",
    image: "/apple-touch-icon.png",
    author: "Ahmed Rezk",
    about_author: `Self-motivated and ambitious Web Developer with solid knowledge and proficiency in web technologies & tools as well as strong skills in writing clean and efficient code.\nI started work as a financial auditor for seven years with reputable companies in Egypt and abroad that has strengthened my teamwork skills, time management skills and the ability to work with a wide variety of clients and meet deadlines.\nAfter that I found myself into programming so I decided to follow my passion and currently I am enjoying creating modern and mobile responsive web applications.`,
    email: "contact@email.com",
    phone: "+20 1234 56789",
    location: "Cairo, Egypt",
    github: "https://github.com/ahmdrzk89",
    linkedin: "https://www.linkedin.com/in/ahmdrzk89",
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
