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
  const isNewest = currentPage === 1
  const isOldest = currentPage === numPages
  const newerPage = `/blog/${
    currentPage > 2 ? (currentPage - 1).toString() : ''
  }`
  const olderPage = `/blog/${(currentPage + 1).toString()}`

  return (
    <>
      <Helmet>
        <title>Triangular Cube's Blog</title>
      </Helmet>
      <Center>
        <div
          className='is-flex is-flex-direction-column is-justify-content-center'
          style={{ flex: 1 }}
        >
          {data.allMdx.nodes.map(node => (
            <article className='block' key={node.slug}>
              <Link
                className='is-flex is-flex-direction-column is-align-items-center'
                to={`/blog/${node.slug}`}
              >
                <p className='is-size-4 has-text-centered'>
                  {node.frontmatter.title}
                </p>
                <p className='is-size-6 has-text-dark has-text-centered'>
                  {node.frontmatter.date}
                </p>
              </Link>
            </article>
          ))}
        </div>
        <div className='is-flex' style={{ width: '100%' }}>
          {!isOldest && (
            <Link to={olderPage} rel='older'>
              ← Older Posts
            </Link>
          )}
          <div style={{ flex: 1 }} />
          {!isNewest && (
            <Link to={newerPage} rel='newer'>
              Newer Posts →
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
      filter: { fields: { sourceName: { eq: "blog" } } }
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
