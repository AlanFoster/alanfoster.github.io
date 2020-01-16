const select = require("unist-util-select");
const parseLanguageDetails = require("./parse-language-details");
const highlightCode = require("gatsby-remark-prismjs/highlight-code");
const fsExtra = require("fs-extra");
const path = require("path");

// This will be replaced with a real react component later via rehype
const withSpoilers = html => {
  return `
    <spoilers>
      ${html}
    </spoilers>
  `.trim();
};

const withAsciinema = src => {
  return `
    <asciinema src="${src}"></asciinema>
  `.trim();
};

const withVideo = src => {
  return `
    <video src="${src}"></video>
  `.trim();
};

const copyAssetPath = async function({
  files,
  markdownNode,
  getNode,
  requiredFile
}) {
  const parentNode = getNode(markdownNode.parent);
  const absolutePath = path.join(path.join(parentNode.dir), requiredFile);

  const file = files.find(file => {
    if (file && file.absolutePath === absolutePath) {
      return file;
    }

    return null;
  });

  if (!file) {
    // eslint-disable-next-line no-console
    console.error("Could not find file", absolutePath);
    return null;
  }

  const fileName = `${file.name}-${file.internal.contentDigest}.${
    file.extension
  }`;
  const publicURL = path.join(process.cwd(), "public", "static", fileName);

  // Don't copy anything is the file already exists at the location.
  if (!fsExtra.existsSync(publicURL)) {
    try {
      await fsExtra.ensureDir(path.dirname(publicURL));
      await fsExtra.copy(absolutePath, publicURL);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`error copy ing file`, err);
      return null;
    }
  }

  return `/static/${fileName}`;
};

module.exports = async (
  { files, markdownNode, getNode, markdownAST },
  { classPrefix = "language-" } = {}
) => {
  const codeBlocks = select(markdownAST, "code");

  return Promise.all(
    codeBlocks.map(
      node =>
        new Promise(async resolve => {
          let {
            language,
            title,
            highlightLines,
            hasSpoilers
          } = parseLanguageDetails(node);

          if (language === "react-example") {
            // Quick hack to shortcircuit react-examples, so that they can be picked
            // up later and converted into a real react component. We can't swap this
            // to be an HTML node, as we don't want the tree to be parsed. We want the
            // original plaintext to be used later in the rendering process.
            node.type = "text";
            node.value = `react-example->${node.value.replace(/ /g, "Z")}`;

            resolve();
            return;
          }

          if (language === "video") {
            const requiredFile = node.value.trim();
            const assetURL = await copyAssetPath({
              files,
              markdownNode,
              getNode,
              requiredFile
            });
            if (!assetURL) return;

            node.type = "html";
            node.value = withVideo(assetURL);
            resolve();
            return;
          }

          if (language === "asciinema") {
            const requiredFile = node.value.trim();
            const assetURL = await copyAssetPath({
              files,
              markdownNode,
              getNode,
              requiredFile
            });
            if (!assetURL) return;

            node.type = "html";
            node.value = withAsciinema(assetURL);
            resolve();
            return;
          }

          // Allow users to specify a custom class prefix to avoid breaking
          // line highlights if Prism is required by any other code.
          // This supports custom user styling without causing Prism to
          // re-process our already-highlighted markup.
          // @see https://github.com/gatsbyjs/gatsby/issues/1486
          const className = `${classPrefix}${language}`;

          // Replace the node with the markup we need to make
          // 100% width highlighted code lines work
          const html = `
            <div class="code-snippet">
              ${
                title ? `<code class="code-snippet__title">${title}</code>` : ""
              }
              <div class="gatsby-highlight">
                <pre class="${className}"><code class="${className}">${highlightCode(
            language,
            node.value,
            {},
            highlightLines
          )}</code></pre>
              </div>
            </div>
          `;

          node.type = "html";
          node.value = hasSpoilers ? withSpoilers(html) : html;
          resolve();
        })
    )
  );
};
