import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Layers = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Layers',
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
    aria-labelledby="${`title-layers-${count}`}"
    aria-describedby="${`title-layers-${count}`}"
  >
    <title id="${`title-layers-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-layers-${count}`}">${desc}</desc>` : html``}
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>`;
};
