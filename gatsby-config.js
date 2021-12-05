module.exports = {
  pathPrefix:"/Portifolio",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portifolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};
