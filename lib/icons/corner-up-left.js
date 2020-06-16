import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerUpLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Up Left',
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
    aria-labelledby="${`title-corner-up-left-${count}`}"
    aria-describedby="${`title-corner-up-left-${count}`}"
  >
    <title id="${`title-corner-up-left-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-corner-up-left-${count}`}">${desc}</desc>` : html``}
    <polyline points="9 14 4 9 9 4" />
    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  </svg>`;
};
