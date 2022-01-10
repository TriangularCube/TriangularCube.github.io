import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Helmet } from 'react-helmet'
import { Center } from '../../components/Center'
import { CodeBlock } from '../../components/CodeBlock'
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

const components = {
  pre: CodeBlock,
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
          <h4 className='title is-4 has-text-dark'>
            {data.mdx.frontmatter.title}
          </h4>
          <p className='subtitle is-6 pb-2'>
            <em>{data.mdx.frontmatter.date}</em>
          </p>

          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
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
