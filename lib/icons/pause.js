import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Pause = ({ width = 24, height = 24, hidden = false, title = 'Pause', desc } = {}) => {
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
    aria-labelledby="${`title-pause-${count}`}"
    aria-describedby="${`title-pause-${count}`}"
  >
    <title id="${`title-pause-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-pause-${count}`}">${desc}</desc>` : html``}
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>`;
};
