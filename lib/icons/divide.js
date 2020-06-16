import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Divide = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Divide',
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
    aria-labelledby="${`title-divide-${count}`}"
    aria-describedby="${`title-divide-${count}`}"
  >
    <title id="${`title-divide-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-divide-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="6" r="2" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <circle cx="12" cy="18" r="2" />
  </svg>`;
};
