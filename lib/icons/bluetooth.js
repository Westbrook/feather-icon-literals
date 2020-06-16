import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Bluetooth = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bluetooth',
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
    aria-labelledby="${`title-bluetooth-${count}`}"
    aria-describedby="${`title-bluetooth-${count}`}"
  >
    <title id="${`title-bluetooth-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-bluetooth-${count}`}">${desc}</desc>` : html``}
    <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
  </svg>`;
};
