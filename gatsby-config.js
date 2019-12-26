module.exports = {
  siteMetadata: {
    title: `Charles Jenkins | Software Engineer`,
    url: `https://www.thecharlesjenkins.com`,
    image: `static/best_charlemagne.ico`,
    description: `Main page for the personal website for Charles Jenkins. He is a computer science student at Georgia Tech that is passionate about programming.`,
    social: [
      {
        name: "LinkedIn",
        url: `https://linkedin.com/in/charles--jenkins`,
      },
      {
        name: "Github",
        url: `https://github.com/BestCharlemagne`,
      },
      {
        name: "Email",
        url: `mailto:thecharlesjenkins@gmail.com`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charles Jenkins | Software Engineer`,
        short_name: `Charles Jenkins`,
        start_url: `/`,
        background_color: `#24305E`,
        theme_color: `#116466`,
        display: `standalone`,
      }
    },

    `gatsby-plugin-offline`,
  ],
}
