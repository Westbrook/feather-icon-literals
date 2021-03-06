import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Crosshair = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Crosshair',
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
    aria-labelledby="${`title-crosshair-${count}`}"
    aria-describedby="${`title-crosshair-${count}`}"
  >
    <title id="${`title-crosshair-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-crosshair-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>`;
};
