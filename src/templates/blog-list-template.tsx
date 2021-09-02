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
  pageContext: {
    numPages: number
    currentPage: number
  }
}

const useStyles = makeStyles({
  article: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.5rem 0',
  },
  navSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    marginTop: '8rem',
  },
  spacer: {
    flex: 1,
  },
})

function Blog({ data, pageContext }: DataType) {
  const classes = useStyles()

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <>
      <Helmet>
        <title>Triangular Cube's Blog</title>
      </Helmet>
      <Center>
        {data.allMdx.nodes.map(node => (
          <article key={node.slug} className={classes.article}>
            <Link to={`/blog/${node.slug}`}>
              <Typography variant='h6'>{node.frontmatter.title}</Typography>
            </Link>
            <Typography variant='body2'>
              Posted: {node.frontmatter.date}
            </Typography>
          </article>
        ))}
        <div className={classes.navSection}>
          {!isFirst && (
            <Link to={prevPage} rel='prev'>
              ← Previous Page
            </Link>
          )}
          <div className={classes.spacer} />
          {!isLast && (
            <Link to={nextPage} rel='next'>
              Next Page →
            </Link>
          )}
        </div>
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
