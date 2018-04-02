const visit = require("unist-util-visit");
const parseLanguageDetails = require("./parse-language-details");
const highlightCode = require("gatsby-remark-prismjs/highlight-code");

// This will be replaced with a real react component later via rehype
const withSpoilers = html => {
  return `
    <spoilers>
      ${html}
    </spoilers>
  `;
};

module.exports = ({ markdownAST }, { classPrefix = "language-" } = {}) => {
  visit(markdownAST, "code", node => {
    let language = node.lang;
    let { splitLanguage, highlightLines, hasSpoilers } = parseLanguageDetails(
      language
    );
    language = splitLanguage;

    // PrismJS's theme styles are targeting pre[class*="language-"]
    // to apply its styles. We do the same here so that users
    // can apply a PrismJS theme and get the expected, ready-to-use
    // outcome without any additional CSS.
    //
    // @see https://github.com/PrismJS/prism/blob/1d5047df37aacc900f8270b1c6215028f6988eb1/themes/prism.css#L49-L54
    let languageName = "none";
    if (language) {
      language = language.toLowerCase();
      languageName = language;
    }

    if (language === "react-example") {
      // Quick hack to shortcircuit react-examples, so that they can be picked
      // up later and converted into a real react component. We can't swap this
      // to be an HTML node, as we don't want the tree to be parsed. We want the
      // original plaintext to be used later in the rendering process.
      node.type = "text";
      node.value = `react-example->${node.value.replace(/ /g, "Z")}`;

      return;
    }

    // Allow users to specify a custom class prefix to avoid breaking
    // line highlights if Prism is required by any other code.
    // This supports custom user styling without causing Prism to
    // re-process our already-highlighted markup.
    // @see https://github.com/gatsbyjs/gatsby/issues/1486
    const className = `${classPrefix}${languageName}`;

    // Replace the node with the markup we need to make
    // 100% width highlighted code lines work
    const html = `<div class="gatsby-highlight">
      <pre class="${className}"><code class="${className}">${highlightCode(
      language,
      node.value,
      highlightLines
    )}</code></pre>
      </div>`;

    node.type = "html";
    node.value = hasSpoilers ? withSpoilers(html) : html;
  });
};
