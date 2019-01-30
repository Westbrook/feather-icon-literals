let customTemplateLiteralTag;

export const tag = function(strings, ...values) {
  if (customTemplateLiteralTag) {
    return customTemplateLiteralTag(strings, ...values);
  }
  return values.reduce((acc, v, idx) =>
        acc + v + strings[idx + 1], strings[0]);
}

export const setCustomTemplateLiteralTag = (tag) => customTemplateLiteralTag = tag;
