import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Italic = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Italic',
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
    aria-labelledby="${`title-italic-${count}`}"
    aria-describedby="${`title-italic-${count}`}"
  >
    <title id="${`title-italic-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-italic-${count}`}">${desc}</desc>` : html``}
    <line x1="19" y1="4" x2="10" y2="4" />
    <line x1="14" y1="20" x2="5" y2="20" />
    <line x1="15" y1="4" x2="9" y2="20" />
  </svg>`;
};
