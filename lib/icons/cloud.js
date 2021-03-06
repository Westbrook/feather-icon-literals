import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Cloud = ({ width = 24, height = 24, hidden = false, title = 'Cloud', desc } = {}) => {
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
    aria-labelledby="${`title-cloud-${count}`}"
    aria-describedby="${`title-cloud-${count}`}"
  >
    <title id="${`title-cloud-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-cloud-${count}`}">${desc}</desc>` : html``}
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>`;
};
