import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

interface DataType {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          date: string
          title: string
        }
        id: string
        body: string
      }[]
    }
  }
}

function Blog({ data }: DataType) {
  return (
    <>
      <Helmet>
        <title>Triangular Cube's Blog</title>
      </Helmet>
      <div>
          {data.allMdx.nodes.map(node => (
            <article key={node.id}>{node.frontmatter.title}</article>
          ))}
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default Blog
