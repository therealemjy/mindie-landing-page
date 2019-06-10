module.exports = {
  siteMetadata: {
    title: `Starter Landing Page`,
    description: `A barebone landing page starter with some minimal styles.`,
    author: `@mindie`,
    siteUrl: `https://mindie.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'TO_BE_ADDED_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
};
