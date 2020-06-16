import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Minus = ({ width = 24, height = 24, hidden = false, title = 'Minus', desc } = {}) => {
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
    aria-labelledby="${`title-minus-${count}`}"
    aria-describedby="${`title-minus-${count}`}"
  >
    <title id="${`title-minus-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-minus-${count}`}">${desc}</desc>` : html``}
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>`;
};
