import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerDownRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Down Right',
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
    aria-labelledby="${`title-corner-down-right-${count}`}"
    aria-describedby="${`title-corner-down-right-${count}`}"
  >
    <title id="${`title-corner-down-right-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-corner-down-right-${count}`}">${desc}</desc>` : html``}
    <polyline points="15 10 20 15 15 20" />
    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
  </svg>`;
};
