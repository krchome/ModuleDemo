// textProcessor.js

const stringUtils = require('./stringUtils');
const arrayUtils = require('./arrayUtils');

function processText(text) {
  const upper = stringUtils.toUpperCase(text);
  const lower = stringUtils.toLowerCase(text);
  const firstWord = arrayUtils.firstElement(text.split(' '));
  const lastWord = arrayUtils.lastElement(text.split(' '));

  return {
    upper,
    lower,
    firstWord,
    lastWord
  };
}

module.exports = {
  processText
};
