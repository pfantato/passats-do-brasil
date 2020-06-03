import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Masonry from 'react-masonry-css'

import styles from './blog-post.module.css';
console.log(styles)

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;
  const { previous, next } = pageContext
  const images = data.images.images; 
  
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Layout location={location} style={styles.layout} title={title} description={description}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className={styles.car}>
        <header>
          <h1 className={styles.carName}>
            {post.frontmatter.title}
          </h1>
          <p className={styles.carValue}>
            {post.frontmatter.value}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <h2>Imagens</h2>
        <div className={styles.images_grid}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.my_masonry_grid}
            columnClassName={styles.my_masonry_grid__column}>
              {images.sort(( a, b ) => (( a.name < b.name ) ? -1 : ( a.name > b.name ) ? 1 : 0)).map((image, index) => (
                <div className={styles.images_grid__image} key={index}>
                  <Img alt={image.name} fluid={image.childImageSharp.fluid} />
                </div>
              ))}
          </Masonry>
        </div>
      </article>


      <nav>
        <ul className={styles.bottom_navbar}>
          <li className={styles.bottom_navbar__link}>
            {next && (
              <Link to={next.fields.slug} className={styles.bottom_navbar__link__prev} rel="prev">
                &lt; {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link className={styles.bottom_navbar__link} className={styles.bottom_navbar__link__next} to={previous.fields.slug} rel="next">
                {previous.frontmatter.title} &gt;
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
        description
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