import React from 'react'
import { graphql, Link } from 'gatsby'
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

function Blog({ data, pageContext }: DataType) {
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
          <article key={node.slug}>
            <Link className='is-flex is-flex-direction-column is-align-items-center' to={`/blog/${node.slug}`}>
              <p className='is-size-4'>{node.frontmatter.title}</p>
              <p className='is-size-6 has-text-dark'>{node.frontmatter.date}</p>
            </Link>
          </article>
        ))}
        <div>
          {!isFirst && (
            <Link to={prevPage} rel='prev'>
              ← Previous Page
            </Link>
          )}
          <div />
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
