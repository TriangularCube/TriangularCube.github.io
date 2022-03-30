import { MDXProvider } from '@mdx-js/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Center } from '../components/Center'
import { MdxComponents } from '../components/MdxComponents'

interface DefinitionsProps {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

function Definitions({ data }: DefinitionsProps) {
  return (
    <Center>
      <div className='title is-3'>{data.mdx.frontmatter.title}</div>
      <div className='subtitle is-5'>
        Last Updated: {data.mdx.frontmatter.date}
      </div>

      <hr />

      <div className='content'>
        <MDXProvider components={MdxComponents}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Center>
  )
}

export const query = graphql`
  query {
    mdx(slug: { eq: "philosophy-definitions" }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`

export default Definitions
