module.exports = {
  siteMetadata: {
    title: 'Triangular Cube',
  },
  plugins: [
    `gatsby-plugin-sass`,
    // `gatsby-plugin-top-layout`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    'gatsby-remark-images',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'page-content',
        path: `${__dirname}/page-content/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'dracula',
            },
          },
        ],
      },
    },
  ],
}
