module.exports = {
  siteMetadata: {
    title: `Passats do Brasil`,
    description: `Uma coleção exclusiva de um aficcionado por carros.`,
    siteUrl: `https://passatsdobrasil.com.br/`
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: 'gatsby-plugin-web-vitals',
      options: {
        // The Google Analytics property ID; the reporting code won't be generated without it
        trackingId: 'UA-168228104-1',
        // An array with metrics you want to track and send to analytics
        metrics: [`FID`, `TTFB`, `LCP`, `CLS`, `FCP`],
        // Event Category (optional) { string }, default 'Web Vitals'
        eventCategory: 'Performance',
        // Include Web Vitals tracking in development
        // Defaults to false meaning Vitals will only be tracked in production.
        includeInDevelopment: false,
        // Prints metrics in the console when true
        debug: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168228104-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Passats do Brasil`,
        short_name: `Passats Brasil`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#2D2D2D`,
        display: `standalone`,
        icon: `content/assets/logo-light.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
