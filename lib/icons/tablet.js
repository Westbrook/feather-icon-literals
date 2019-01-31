import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Tablet = ({ width = 24, height = 24, hidden, title = 'Tablet', desc = 'Tablet' }) =>
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
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  `;
