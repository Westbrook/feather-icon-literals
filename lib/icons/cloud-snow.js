import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudSnow = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Snow',
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
    aria-labelledby="${`title-cloud-snow-${count}`}"
    aria-describedby="${`title-cloud-snow-${count}`}"
  >
    <title id="${`title-cloud-snow-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-cloud-snow-${count}`}">${desc}</desc>` : html``}
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <line x1="8" y1="16" x2="8.01" y2="16" />
    <line x1="8" y1="20" x2="8.01" y2="20" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <line x1="12" y1="22" x2="12.01" y2="22" />
    <line x1="16" y1="16" x2="16.01" y2="16" />
    <line x1="16" y1="20" x2="16.01" y2="20" />
  </svg>`;
};
