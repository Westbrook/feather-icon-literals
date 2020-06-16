import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Tablet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tablet',
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
    aria-labelledby="${`title-tablet-${count}`}"
    aria-describedby="${`title-tablet-${count}`}"
  >
    <title id="${`title-tablet-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-tablet-${count}`}">${desc}</desc>` : html``}
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>`;
};
