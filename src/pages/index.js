import React from "react"
import { Link, graphql } from "gatsby"

import styles from './index.module.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <Layout location={location} title={title} description={description}>
      <SEO title="Todos os carros" />

      <div className={styles.cars_grid}>
        <nav className={styles.cars_grid__header}>
          <h2 className={styles.cars_grid__header__title}>Conheça a coleção</h2>
          <span className={styles.cars_grid__header__indicator}>
            Mostrando { posts.length } de { posts.length }
          </span> 
        </nav>
        <section className={styles.cars_grid__content}>
          {posts.sort(( a, b ) => {
            return (( a.node.frontmatter.order < b.node.frontmatter.order ) ? -1 : ( a.node.frontmatter.order > b.node.frontmatter.order ) ? 1 : 0)
          }).map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            const price = node.frontmatter.value || 'Sob consulta'
            const featuredImage = node.frontmatter.featuredImage
            const image = featuredImage ? <Image filename={ featuredImage?.relativeDirectory + `/` + featuredImage?.childImageSharp.fluid.originalName } className={styles.cars_grid__content__car__figure__image} /> : '';
            return (
              <div className={styles.cars_grid__content__car} key={index} >
                <Link className={styles.cars_grid__content__car__image} to={node.fields.slug}>
                  {image}
                </Link>
                <Link className={styles.cars_grid__content__car__description} to={node.fields.slug}>
                  <h2 className={styles.cars_grid__content__car__description__car_name}>{title}</h2>
                  <p className={styles.cars_grid__content__car__description__car_price}>{price}</p>
                </Link>
              </div>
            )})}
        </section>
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
        description
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
            order
            featuredImage {
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`
