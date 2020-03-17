module.exports = {
  siteMetadata: {
    title: 'Votre support au quotidien - Mindie',
    description: `Obtenez le soutien d'un professionnel depuis le confort de votre canapé`,
    author: '@mindie',
    twitterHandle: '@mindieHQ',
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
        trackingId: 'UA-XXXXXXXXX-X',
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
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1418923,
        sv: 6,
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
