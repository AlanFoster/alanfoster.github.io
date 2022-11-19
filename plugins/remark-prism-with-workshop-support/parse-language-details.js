const rangeParser = require(`parse-numeric-range`);

module.exports = (node) => {
  const language = (node.lang || "none").toLowerCase();
  const parsedConfig = JSON.parse(node.meta || "{}");

  return {
    language: language,
    ...parsedConfig,
    highlightLines: rangeParser
      .parse(parsedConfig.highlight || "")
      .filter((n) => n > 0),
  };
};
