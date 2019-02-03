import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TrendingDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trending Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
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
      aria-labelledby="${`title-trending-down-${count}`}"
      aria-describedby="${`title-trending-down-${count}`}"
    >
      <title id="${`title-trending-down-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-trending-down-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  `;
};
