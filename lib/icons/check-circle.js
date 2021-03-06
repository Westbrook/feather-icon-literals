import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CheckCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Check Circle',
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
    aria-labelledby="${`title-check-circle-${count}`}"
    aria-describedby="${`title-check-circle-${count}`}"
  >
    <title id="${`title-check-circle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-check-circle-${count}`}">${desc}</desc>` : html``}
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>`;
};
