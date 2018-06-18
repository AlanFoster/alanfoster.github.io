const rangeParser = require(`parse-numeric-range`);

module.exports = languageConfig => {
  const [language, config] = (languageConfig || "").split("{");
  const parsedConfig = JSON.parse(config ? `{${config}` : "{}");

  return {
    language: (language || "none").toLowerCase(),
    ...parsedConfig,
    highlightLines: rangeParser
      .parse(parsedConfig.highlight || "")
      .filter(n => n > 0)
  };
};
