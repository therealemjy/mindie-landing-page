module.exports = {
  siteMetadata: {
    title: 'Starter Landing Page',
    description: 'A barebone landing page starter with some minimal styles.',
    author: '@mindie',
    siteUrl: 'https://mindie.app',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-143441876-1',
        head: false,
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
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'eeef61de-83b4-4b66-a17e-27cc1ba0bcb9',
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'mindie.app',
        protocol: 'https',
        hostname: 'www.mindie.app',
      },
    },
  ],
};
