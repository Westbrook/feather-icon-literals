import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Plus = ({ width = 24, height = 24, hidden = false, title = 'Plus', desc } = {}) => {
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
    aria-labelledby="${`title-plus-${count}`}"
    aria-describedby="${`title-plus-${count}`}"
  >
    <title id="${`title-plus-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-plus-${count}`}">${desc}</desc>` : html``}
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>`;
};
