import { makeStyles, Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Center } from '../../components/Center'
import { CodeBlock } from '../../components/CodeBlock'

interface MDXProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
      body: string
    }
  }
}

const components = {
  pre: CodeBlock
}

const useStyles = makeStyles({
  container: {
    height: '100%',
    width: '80%',
    minWidth: '10rem',
  },
  titlePadding: {
    height: '2rem',
  },
  datePadding: {
    paddingBottom: '0.5rem',
  },
})

function BlogPost({ data }: MDXProps) {
  const classes = useStyles()
  const featuredImage =
    data.mdx.frontmatter.featuredImage?.childImageSharp?.fluid

  return (
    <>
      <Helmet>
        <title>{data.mdx.frontmatter.title}</title>
      </Helmet>
      <Center>
        <div className={classes.container}>
          {featuredImage && <Img fluid={featuredImage} />}
          <div className={classes.titlePadding} />
          <Typography variant='h4'>{data.mdx.frontmatter.title}</Typography>
          <Typography variant='body2' className={classes.datePadding}>
            {data.mdx.frontmatter.date}
          </Typography>

          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default BlogPost
