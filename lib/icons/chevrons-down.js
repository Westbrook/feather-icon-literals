import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronsDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevrons Down',
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
    aria-labelledby="${`title-chevrons-down-${count}`}"
    aria-describedby="${`title-chevrons-down-${count}`}"
  >
    <title id="${`title-chevrons-down-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-chevrons-down-${count}`}">${desc}</desc>` : html``}
    <polyline points="7 13 12 18 17 13" />
    <polyline points="7 6 12 11 17 6" />
  </svg>`;
};
