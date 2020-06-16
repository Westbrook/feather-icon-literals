import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Monitor = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Monitor',
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
    aria-labelledby="${`title-monitor-${count}`}"
    aria-describedby="${`title-monitor-${count}`}"
  >
    <title id="${`title-monitor-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-monitor-${count}`}">${desc}</desc>` : html``}
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>`;
};
