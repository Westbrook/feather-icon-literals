import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DivideCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Divide Circle',
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
    aria-labelledby="${`title-divide-circle-${count}`}"
    aria-describedby="${`title-divide-circle-${count}`}"
  >
    <title id="${`title-divide-circle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-divide-circle-${count}`}">${desc}</desc>` : html``}
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
    <line x1="12" y1="8" x2="12" y2="8" />
    <circle cx="12" cy="12" r="10" />
  </svg>`;
};
