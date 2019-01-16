import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "components/layouts/workshop";
import Helmet from "react-helmet";
import ProjectorIcon from "components/projector-icon";
import EditIcon from "components/edit-icon";
import HtmlRenderer from "components/html-renderer";
import Menu from "./components/menu";
import QuickNavigation from "./components/quick-navigation";
import styles from "./index.module.css";

const Workshop = props => {
  const { data } = props;
  const { sidebar, workshop } = data;

  return (
    <Layout>
      {({ Footer, wrapperClassName, menuClassName, contentClassName }) => (
        <div className={wrapperClassName}>
          <Helmet title={workshop.frontmatter.title} />
          <div className={menuClassName}>
            <Menu items={data.sidebar.fields.yml.items} />
          </div>
          <div className={contentClassName}>
            <div>
              <a
                className={styles.quickLink}
                href={workshop.fields.editURL}
                target="_blank"
              >
                <EditIcon />
              </a>

              <a
                className={styles.quickLink}
                href={`../presentation/#${encodeURIComponent(
                  workshop.fields.slug
                )}`}
              >
                <div className={styles.viewPresentation}>
                  <ProjectorIcon />
                </div>
              </a>

              <HtmlRenderer ast={workshop.htmlAst} />
              <QuickNavigation sidebar={sidebar} workshop={workshop} />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </Layout>
  );
};

Workshop.propTypes = {
  data: PropTypes.object,
  wrapperClassName: PropTypes.string,
  menuClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  Footer: PropTypes.func.isRequired
};

export default Workshop;

export const query = graphql`
  query WorkshopQuery($slug: String!, $sidebarPath: String!) {
    sidebar: file(relativePath: { eq: $sidebarPath }) {
      fields {
        yml {
          items {
            title
            link
          }
        }
      }
    }

    workshop: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      headings {
        value
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
        editURL
      }
    }
  }
`;
