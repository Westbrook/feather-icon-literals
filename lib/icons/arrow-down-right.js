import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowDownRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down Right',
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
    aria-labelledby="${`title-arrow-down-right-${count}`}"
    aria-describedby="${`title-arrow-down-right-${count}`}"
  >
    <title id="${`title-arrow-down-right-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-arrow-down-right-${count}`}">${desc}</desc>` : html``}
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>`;
};
