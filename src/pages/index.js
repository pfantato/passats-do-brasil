import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';

import '../scss/home.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import dragSlider from "../utils/dragSlider";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges;

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
      <SEO title="Todos os carros" />
      <div className="wrapper">
        <div className="slider-indicator">
          <div id="slider-indicator_bar">
          </div>
        </div>
        <nav className="menu">
          <div id="slider_wrapper" className="menu__wrapper">
            <ul id="slider" className="menu__menu">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const price = node.frontmatter.value || 'Sob consulta'
                const featuredImage = node.frontmatter.featuredImage
                return (
                  <li className="super-slider_item">
                    <div className="menu__item">
                      <figure className="text-hover-img">
                        <Img alt={featuredImage.name} fluid={featuredImage.childImageSharp.fluid} />
                        <figcaption>
                          <h1>{title}</h1>
                          <p>{price}</p>
                          <Link to={node.fields.slug}>
                            Ver detalhes
                          </Link>
                        </figcaption>
                      </figure>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            value
            featuredImage {
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
