const rangeParser = require(`parse-numeric-range`);

module.exports = (node) => {
  const language = (node.lang || "none").toLowerCase();
  const parsedConfig = JSON.parse(node.meta || "{}");
  const highlightLines = rangeParser(parsedConfig.highlight || "").filter(
    (n) => n > 0
  );

  return {
    language: language,
    ...parsedConfig,
    highlightLines: highlightLines,
  };
};
