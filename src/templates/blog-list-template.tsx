import React from 'react'
import { graphql, Link } from 'gatsby'
import { makeStyles, Typography } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import { Center } from '../components/Center'

interface DataType {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          date: string
          title: string
        }
        slug: string
      }[]
    }
  }
}

const useStyles = makeStyles({
  article: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.5rem 0',
  },
})

function Blog({ data }: DataType) {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Triangular Cube's Blog</title>
      </Helmet>
      <Center>
        {data.allMdx.nodes.map(node => (
          <article key={node.slug} className={classes.article}>
            <Link to={`/blog/${node.slug}`}>
              <Typography variant='h4'>{node.frontmatter.title}</Typography>
            </Link>
            <Typography variant='body2'>
              Posted: {node.frontmatter.date}
            </Typography>
          </article>
        ))}
      </Center>
    </>
  )
}

export const query = graphql`
    query ($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                slug
            }
        }
    }
`

export default Blog
