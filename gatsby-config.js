require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "ArnCode.me",
    description: "Personal Portfolio Website ✈️",
    siteUrl: "https://arncode.me",
    image: "/apple-touch-icon.png",
    author: "Ahmed Rezk",
    about_author: `Hello! I am Ahmed Rezk, a self-motivated and ambitious Web Developer with solid knowledge and proficiency in web technologies & tools as well as strong skills in writing clean and efficient code.\nI started work as a financial auditor for seven years with reputable companies in Egypt and abroad, that has strengthened my teamwork skills, time management skills and the ability to work with a wide variety of clients and meet deadlines.\nAfter that I found myself into coding and programming so I decided to follow my passion and currently I am enjoying creating modern and mobile responsive web applications.`,
    favourite_quote: "Make it work, make it right, make it fast. — Kent Beck",
    email: "ahmed@arncode.me",
    phone: "+20 102 711 3447",
    location: "Cairo, Egypt",
    github: "https://github.com/atheistcode",
    linkedin: "https://www.linkedin.com/in/ahmed-rezk-10",
    main_intro_text: "MERN Stack Web Developer",
    sub_intro_text:
      "Passionate about coding and programming. Enjoy building modern responsive websites.",
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
    `gatsby-transformer-yaml`,
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
