import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerDownLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Down Left',
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
    aria-labelledby="${`title-corner-down-left-${count}`}"
    aria-describedby="${`title-corner-down-left-${count}`}"
  >
    <title id="${`title-corner-down-left-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-corner-down-left-${count}`}">${desc}</desc>` : html``}
    <polyline points="9 10 4 15 9 20" />
    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  </svg>`;
};
