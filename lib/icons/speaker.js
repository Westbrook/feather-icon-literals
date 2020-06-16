import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Speaker = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Speaker',
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
    aria-labelledby="${`title-speaker-${count}`}"
    aria-describedby="${`title-speaker-${count}`}"
  >
    <title id="${`title-speaker-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-speaker-${count}`}">${desc}</desc>` : html``}
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <circle cx="12" cy="14" r="4" />
    <line x1="12" y1="6" x2="12.01" y2="6" />
  </svg>`;
};
