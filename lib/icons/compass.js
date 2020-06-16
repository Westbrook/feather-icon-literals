import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Compass = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Compass',
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
    aria-labelledby="${`title-compass-${count}`}"
    aria-describedby="${`title-compass-${count}`}"
  >
    <title id="${`title-compass-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-compass-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>`;
};
