import { debounce, makeStyles, Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import React, { useEffect, useState } from 'react'
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

const margin = 20

const useStyles = makeStyles({
  container: {
    height: '100%',
    margin: `${margin}px`,
    minWidth: '10rem',
    maxWidth: `50rem`
  },
  titlePadding: {
    height: '2rem',
  },
  datePadding: {
    paddingBottom: '0.5rem',
  },
})

// https://stackoverflow.com/questions/66996984/using-prismjs-for-syntax-highlighted-code-blocks-is-breaking-layout-on-mobile

function BlogPost({ data }: MDXProps) {
  const classes = useStyles()
  const featuredImage =
    data.mdx.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData

  return (
    <>
      <Helmet>
        <title>{data.mdx.frontmatter.title}</title>
      </Helmet>
      <Center>
        <div
          className={classes.container}
        >
          {featuredImage && (
            <GatsbyImage
              image={featuredImage}
              alt={data.mdx.frontmatter.featuredImageAlt}
            />
          )}
          <div className={classes.titlePadding} />
          <Typography variant='h4'>{data.mdx.frontmatter.title}</Typography>
          <Typography variant='body2' className={classes.datePadding}>
            {data.mdx.frontmatter.date}
          </Typography>

          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>

          <Comments />
        </div>
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
