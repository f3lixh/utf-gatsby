module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "unofficial type foundry",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbnails`,
        path: `${__dirname}/src/images/font_thumbnails`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos/hero`,
      },
    },
  ],
};
