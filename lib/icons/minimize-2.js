import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Minimize2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minimize 2',
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
    aria-labelledby="${`title-minimize-2-${count}`}"
    aria-describedby="${`title-minimize-2-${count}`}"
  >
    <title id="${`title-minimize-2-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-minimize-2-${count}`}">${desc}</desc>` : html``}
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>`;
};
