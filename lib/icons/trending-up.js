import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TrendingUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trending Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-trending-up-${count}`}"
    aria-describedby="${`title-trending-up-${count}`}"
  >
    <title id="${`title-trending-up-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-trending-up-${count}`}">${desc}</desc>` : html``}
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>`;
};
