module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        "excerpt_separator": "<!-- end-excerpt -->",
        plugins: [
          "gatsby-plugin-sharp",
          "gatsby-remark-images",
          "gatsby-remark-autolink-headers",
          "remark-prism-with-workshop-support"
        ]
      }
    }
  ]
};
