import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Off',
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
    aria-labelledby="${`title-cloud-off-${count}`}"
    aria-describedby="${`title-cloud-off-${count}`}"
  >
    <title id="${`title-cloud-off-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-cloud-off-${count}`}">${desc}</desc>` : html``}
    <path
      d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
    />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};
