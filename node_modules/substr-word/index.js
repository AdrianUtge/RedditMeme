function substrWord(text, length) {
  if (text.length <= length) {
    return text;
  }
  var trimmed = text.substr(0, length);
  if (text[length] === ' ') {
    return trimmed;
  }
  var idx = trimmed.lastIndexOf(' ');
  if (idx === -1) {
    return trimmed;
  }
  return trimmed.substr(0, Math.min(trimmed.length, idx));
}

module.exports = substrWord;
