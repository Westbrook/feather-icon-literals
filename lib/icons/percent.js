import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Percent = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Percent',
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
    aria-labelledby="${`title-percent-${count}`}"
    aria-describedby="${`title-percent-${count}`}"
  >
    <title id="${`title-percent-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-percent-${count}`}">${desc}</desc>` : html``}
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>`;
};
