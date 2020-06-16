import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Tv = ({ width = 24, height = 24, hidden = false, title = 'Tv', desc } = {}) => {
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
    aria-labelledby="${`title-tv-${count}`}"
    aria-describedby="${`title-tv-${count}`}"
  >
    <title id="${`title-tv-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-tv-${count}`}">${desc}</desc>` : html``}
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
    <polyline points="17 2 12 7 7 2" />
  </svg>`;
};
