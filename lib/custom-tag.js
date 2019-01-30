let customTemplateLiteralTag;

export const tag = function(strings, ...values) {
  if (customTemplateLiteralTag) {
    return customTemplateLiteralTag(strings, ...values);
  }
  return strings[0];
}

export const setCustomTemplateLiteralTag = (tag) => customTemplateLiteralTag = tag;
