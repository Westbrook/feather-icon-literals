import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const XCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'X Circle',
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
    aria-labelledby="${`title-x-circle-${count}`}"
    aria-describedby="${`title-x-circle-${count}`}"
  >
    <title id="${`title-x-circle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-x-circle-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>`;
};
