/* eslint-disable react/prop-types */

// Ejected from gatsby.js with cp .cache/default-html.js src/html.js
// https://www.gatsbyjs.org/docs/custom-html/#custom-html
import React from "react";
import { withPrefix } from "gatsby-link/index";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
            src={withPrefix("/asciinema/asciinema-player.js")}
            type="text/javascript"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={withPrefix("/asciinema/asciinema-player.css")}
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
