const path = require("path");
const jsYaml = require("js-yaml");
const { createFilePath, loadNodeContent } = require("gatsby-source-filesystem");

exports.onCreateNode = async ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }

  if (node.internal.type === 'File' && node.relativePath.indexOf('/sidebar.yaml') > -1) {
    const content = await loadNodeContent(node);
    const parsedContent = jsYaml.load(content);

    createNodeField({
      node,
      name: 'yml',
      value: parsedContent
    })
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

  const createIndexForWorkshop = new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: {
          fileAbsolutePath: {regex: "/pages/workshops/\\\\w+/index.markdown/"}
        }) {
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
        createPage({
          path: `${node.fields.slug}workshop-goals`,
          component: path.resolve("./src/templates/workshop.js"),
          layout: 'workshop',
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
            sidebarPath: `pages/${node.fields.slug}/sidebar.yaml`,
            slugRegex: `/${node.fields.slug}.*/`
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
