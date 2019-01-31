import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Edit3 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Edit 3',
  desc = 'Edit 3',
} = {}) =>
  html`
    <svg
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
      title="${title}"
    >
      <title>${title}</title>
      <desc>${desc}</desc>
      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
      <line x1="3" y1="22" x2="21" y2="22" />
    </svg>
  `;
