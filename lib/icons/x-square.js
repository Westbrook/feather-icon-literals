import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const XSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'X Square',
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
    aria-labelledby="${`title-x-square-${count}`}"
    aria-describedby="${`title-x-square-${count}`}"
  >
    <title id="${`title-x-square-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-x-square-${count}`}">${desc}</desc>` : html``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </svg>`;
};
