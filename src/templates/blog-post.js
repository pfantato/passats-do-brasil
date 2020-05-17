import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';

import '../scss/blog-post.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import dragSlider from "../utils/dragSlider";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const images = data.images.images; 

  useEffect(() => {
    // Update the document title using the browser API
    const slider = document.getElementById('slider');
    const wrapper = document.getElementById('slider_wrapper');
    const bar = document.getElementById('slider-indicator_bar');
    const items = document.getElementsByClassName('super-slider_item');
    dragSlider(slider, wrapper, bar, items);
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 class="carName">
            {post.frontmatter.title}
          </h1>
          <p class="carValue">
            {post.frontmatter.value}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <h3>Imagens</h3>
        <div className="wrapper">
          <div className="slider-indicator">
            <div id="slider-indicator_bar">
            </div>
          </div>
          <nav className="menu">
            <div id="slider_wrapper" className="menu__wrapper">
              <ul id="slider" className="menu__menu">
                {images.map(image => (
                  <li className="super-slider_item">
                    <div className="menu__item">
                      <Img alt={image.name} fluid={image.childImageSharp.fluid} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </article>


      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $relativePath: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        value
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    images: allFile(filter: {extension: {in: ["jpg", "png", "jpeg"]}, relativeDirectory: {eq: $relativePath}}) {
      images: nodes {
        relativePath
        name
        extension
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            src
            srcSet
            aspectRatio
            sizes
            base64
            srcSetWebp
            srcWebp
            tracedSVG
          }
        } 
      }
    }
  }
`