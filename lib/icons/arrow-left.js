import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Left',
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
    aria-labelledby="${`title-arrow-left-${count}`}"
    aria-describedby="${`title-arrow-left-${count}`}"
  >
    <title id="${`title-arrow-left-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-arrow-left-${count}`}">${desc}</desc>` : html``}
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>`;
};
