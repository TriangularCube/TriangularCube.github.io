module.exports = {
  siteMetadata: {
    title: 'Triangular Cube',
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
