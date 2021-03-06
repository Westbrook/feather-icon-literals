import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronsRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevrons Right',
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
    aria-labelledby="${`title-chevrons-right-${count}`}"
    aria-describedby="${`title-chevrons-right-${count}`}"
  >
    <title id="${`title-chevrons-right-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-chevrons-right-${count}`}">${desc}</desc>` : html``}
    <polyline points="13 17 18 12 13 7" />
    <polyline points="6 17 11 12 6 7" />
  </svg>`;
};
