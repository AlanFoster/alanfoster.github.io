const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const createMarkdownPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const isWorkshop = node.fields.slug.indexOf("/workshops/") === 0;
        const component = isWorkshop
          ? path.resolve("./src/templates/workshop.js")
          : path.resolve("./src/templates/post.js");
        const layout = isWorkshop ? "workshop" : "main";

        createPage({
          path: node.fields.slug,
          component,
          layout,
          context: {
            slug: node.fields.slug
          }
        });
      });

      resolve();
    });
  });

  const createAggregatedPresentation = new Promise((resolve, reject) => {
    graphql(`
       {
         allMarkdownRemark(filter: {frontmatter: {category: {eq: "workshop"}}}) {
           totalCount
           edges {
             node {
               id
               frontmatter {
                 title
                 workshop
                 date(formatString: "DD MMMM, YYYY")
               }
               fields {
                 slug
               }
             }
           }
         }
       }
     `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `${node.fields.slug}presentation`,
          component: path.resolve("./src/templates/presentation-loader.js"),
          layout: 'presentation',
          context: {
            slug: node.fields.slug
          }
        });
      });

      resolve();
    });
  });

  return Promise.all([createMarkdownPages, createAggregatedPresentation]);
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    page.layout = "main";
    createPage(page);

    resolve();
  });
};
