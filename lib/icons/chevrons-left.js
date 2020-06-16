import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronsLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevrons Left',
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
    aria-labelledby="${`title-chevrons-left-${count}`}"
    aria-describedby="${`title-chevrons-left-${count}`}"
  >
    <title id="${`title-chevrons-left-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-chevrons-left-${count}`}">${desc}</desc>` : html``}
    <polyline points="11 17 6 12 11 7" />
    <polyline points="18 17 13 12 18 7" />
  </svg>`;
};
