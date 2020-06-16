import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerUpRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Up Right',
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
    aria-labelledby="${`title-corner-up-right-${count}`}"
    aria-describedby="${`title-corner-up-right-${count}`}"
  >
    <title id="${`title-corner-up-right-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-corner-up-right-${count}`}">${desc}</desc>` : html``}
    <polyline points="15 14 20 9 15 4" />
    <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
  </svg>`;
};
