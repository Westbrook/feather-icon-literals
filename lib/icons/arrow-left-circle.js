import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowLeftCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Left Circle',
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
    aria-labelledby="${`title-arrow-left-circle-${count}`}"
    aria-describedby="${`title-arrow-left-circle-${count}`}"
  >
    <title id="${`title-arrow-left-circle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-arrow-left-circle-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 8 8 12 12 16" />
    <line x1="16" y1="12" x2="8" y2="12" />
  </svg>`;
};
