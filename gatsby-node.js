const path = require("path");
const jsYaml = require("js-yaml");
const { createFilePath, loadNodeContent } = require("gatsby-source-filesystem");

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });

    const fileNode = getNode(node.parent);
    const baseEditUrl =
      "https://github.com/AlanFoster/alanfoster.github.io/edit/develop/src";
    createNodeField({
      node,
      name: "editURL",
      value: `${baseEditUrl}/${fileNode.relativePath}`
    });
  }

  if (
    node.internal.type === "File" &&
    path.basename(node.relativePath) === "sidebar.yaml"
  ) {
    const content = await loadNodeContent(node);
    const parsedContent = jsYaml.load(content);

    createNodeField({
      node,
      name: "yml",
      value: parsedContent
    });
  }
};

const extractWorkshopBase = function(node) {
  return path.dirname(node.fields.slug);
};

const extractSidebarPath = function(node) {
  return path.join("pages", extractWorkshopBase(node), "sidebar.yaml");
};

const extractOverviewPath = function(node) {
  return path.join(
    "pages",
    extractWorkshopBase(node),
    "workshop-goals/index.markdown"
  );
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  const createMarkdownPages = new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(
          filter: { frontmatter: { published: { ne: false } } }
        ) {
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
          ? path.resolve("./src/templates/workshop/index.js")
          : path.resolve("./src/templates/post/index.js");

        createPage({
          path: node.fields.slug,
          component,
          context: {
            sidebarPath: isWorkshop ? extractSidebarPath(node) : null,
            slug: node.fields.slug
          }
        });
      });

      resolve();
    });
  });

  const createIndexRedirectForWorkshops = new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: {
              regex: "/pages/workshops/\\\\w+/workshop-goals/index.markdown/"
            }
            frontmatter: { published: { ne: false } }
          }
        ) {
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
        const createRedirectToWorkshopGoals = ({ fromPath }) =>
          createRedirect({
            fromPath,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: node.fields.slug
          });

        const workshopBase = extractWorkshopBase(node);
        createRedirectToWorkshopGoals({ fromPath: workshopBase });
        createRedirectToWorkshopGoals({ fromPath: workshopBase + "/" });
      });

      resolve();
    });
  });

  const createPostPresentation = new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { category: { eq: "post" }, published: { ne: false } }
          }
        ) {
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
          path: path.join(node.fields.slug, "presentation"),
          component: path.resolve("./src/templates/post-presentation/index.js"),
          context: {
            slug: node.fields.slug
          }
        });
      });

      resolve();
    });
  });

  const createWorkshopPresentation = new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              category: { eq: "workshop" }
              published: { ne: false }
            }
          }
        ) {
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
        const workshopBase = extractWorkshopBase(node);

        createPage({
          path: `${workshopBase}/presentation`,
          component: path.resolve(
            "./src/templates/workshop-presentation/index.js"
          ),
          context: {
            sidebarPath: extractSidebarPath(node),
            overviewPathRegex: `/${extractOverviewPath(node)}/`,
            workshopRegex: `/${workshopBase}.*/`
          }
        });
      });

      resolve();
    });
  });

  return Promise.all([
    createMarkdownPages,
    createIndexRedirectForWorkshops,
    createPostPresentation,
    createWorkshopPresentation
  ]);
};
