import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowUpCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up Circle',
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
    aria-labelledby="${`title-arrow-up-circle-${count}`}"
    aria-describedby="${`title-arrow-up-circle-${count}`}"
  >
    <title id="${`title-arrow-up-circle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-arrow-up-circle-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <polyline points="16 12 12 8 8 12" />
    <line x1="12" y1="16" x2="12" y2="8" />
  </svg>`;
};
