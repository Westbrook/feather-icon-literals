import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Down',
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
    aria-labelledby="${`title-chevron-down-${count}`}"
    aria-describedby="${`title-chevron-down-${count}`}"
  >
    <title id="${`title-chevron-down-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-chevron-down-${count}`}">${desc}</desc>` : html``}
    <polyline points="6 9 12 15 18 9" />
  </svg>`;
};
