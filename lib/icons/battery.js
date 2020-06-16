import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Battery = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Battery',
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
    aria-labelledby="${`title-battery-${count}`}"
    aria-describedby="${`title-battery-${count}`}"
  >
    <title id="${`title-battery-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-battery-${count}`}">${desc}</desc>` : html``}
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
  </svg>`;
};
