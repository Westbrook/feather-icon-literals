import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ZoomIn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Zoom In',
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
    aria-labelledby="${`title-zoom-in-${count}`}"
    aria-describedby="${`title-zoom-in-${count}`}"
  >
    <title id="${`title-zoom-in-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-zoom-in-${count}`}">${desc}</desc>` : html``}
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>`;
};
