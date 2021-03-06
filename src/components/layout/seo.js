import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          defaultImage: image
          author
        }
      }
    }
  `)

  const { pathname } = useLocation()

  const seo = {
    title: data.site.siteMetadata.title,
    description: data.site.siteMetadata.description,
    author: data.site.siteMetadata.author,
    url: `${data.site.siteMetadata.siteUrl}${pathname}`,
    image: `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.image}`,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />

      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:image" content={seo.image} />
      {/* Script related to a deleted Clicky account. */}
      {/* <script>
        var clicky_site_ids = clicky_site_ids || [];
        clicky_site_ids.push(101288471);
      </script>
      <script async src="//static.getclicky.com/js"></script> */}
    </Helmet>
  )
}

export default SEO
