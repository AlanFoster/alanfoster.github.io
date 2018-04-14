const rangeParser = require(`parse-numeric-range`);

module.exports = language => {
  if (!language) {
    return ``;
  }

  let hasSpoilers = language.indexOf("spoilers ") === 0;
  if (hasSpoilers) {
    let [, splitLanguage] = language.split("spoilers ");
    return { splitLanguage, hasSpoilers };
  }

  if (language.split(`{`).length > 1) {
    let [splitLanguage, rangeStr] = language.split(`{`);
    rangeStr = rangeStr.slice(0, -1);
    return {
      splitLanguage,
      highlightLines: rangeParser.parse(rangeStr).filter(n => n > 0)
    };
  }

  return { splitLanguage: language };
};
