import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateCw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate Cw',
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
    aria-labelledby="${`title-rotate-cw-${count}`}"
    aria-describedby="${`title-rotate-cw-${count}`}"
  >
    <title id="${`title-rotate-cw-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-rotate-cw-${count}`}">${desc}</desc>` : html``}
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>`;
};
