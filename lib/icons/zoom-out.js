import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ZoomOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Zoom Out',
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
    aria-labelledby="${`title-zoom-out-${count}`}"
    aria-describedby="${`title-zoom-out-${count}`}"
  >
    <title id="${`title-zoom-out-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-zoom-out-${count}`}">${desc}</desc>` : html``}
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>`;
};
