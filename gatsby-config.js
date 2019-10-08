module.exports = {
  siteMetadata: {
    title: `hacktoberfest2019`,
    description: `Open hack day @webmobtech`,
    author: `@webmobtech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hacktoberfest2019`,
        short_name: `hacktoberfest2019`,
        start_url: `/`,
        background_color: `#00bcd4`,
        theme_color: `#00bcd4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
