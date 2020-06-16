import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Sidebar = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sidebar',
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
    aria-labelledby="${`title-sidebar-${count}`}"
    aria-describedby="${`title-sidebar-${count}`}"
  >
    <title id="${`title-sidebar-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-sidebar-${count}`}">${desc}</desc>` : html``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </svg>`;
};
