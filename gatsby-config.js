module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: "<!-- end-excerpt -->",
        plugins: [
          "gatsby-plugin-sharp",
          "gatsby-remark-images",
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-mermaid",
            options: {
              language: "mermaid",
              theme: "default",
              viewport: {
                width: 200,
                height: 200,
              },
              mermaidOptions: {
                // themeCSS: ".node rect { fill: cornflowerblue; }",
              },
            },
          },
          // Important: This should appear last in the plugin list
          "remark-prism-with-workshop-support",
        ],
      },
    },
  ],
};
