import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'
import { Center } from '../../components/Center'
import { Comments } from '../../components/Comments'

interface MDXProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
        featuredImage: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        featuredImageAlt: string
      }
      body: string
    }
  }
}

// https://stackoverflow.com/questions/66996984/using-prismjs-for-syntax-highlighted-code-blocks-is-breaking-layout-on-mobile

function BlogPost({ data }: MDXProps) {
  const featuredImage =
    data.mdx.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData

  return (
    <>
      <Helmet>
        <title>{data.mdx.frontmatter.title}</title>
      </Helmet>
      <Center>
        <div>
          {featuredImage && (
            <GatsbyImage
              image={featuredImage}
              alt={data.mdx.frontmatter.featuredImageAlt}
            />
          )}
          <div />

          {featuredImage && <hr />}

          <h4 className='title is-3'>{data.mdx.frontmatter.title}</h4>
          <p className='subtitle is-5 pb-2'>
            <em>{data.mdx.frontmatter.date}</em>
          </p>

          <div className='content'>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </div>

        <hr />

        <Comments />
      </Center>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        featuredImageAlt
      }
      body
    }
  }
`

export default BlogPost
