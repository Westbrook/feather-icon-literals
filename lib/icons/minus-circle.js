import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MinusCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minus Circle',
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
    aria-labelledby="${`title-minus-circle-${count}`}"
    aria-describedby="${`title-minus-circle-${count}`}"
  >
    <title id="${`title-minus-circle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-minus-circle-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};
