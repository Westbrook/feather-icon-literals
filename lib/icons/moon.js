import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Moon = ({ width = 24, height = 24, hidden = false, title = 'Moon', desc } = {}) => {
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
    aria-labelledby="${`title-moon-${count}`}"
    aria-describedby="${`title-moon-${count}`}"
  >
    <title id="${`title-moon-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-moon-${count}`}">${desc}</desc>` : html``}
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>`;
};
