import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Edit2 = ({ width = 24, height = 24, hidden, title = 'Edit 2', desc = 'Edit 2' }) =>
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
    >
      <title>${title}</title>
      <desc>${desc}</desc>
      <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
    </svg>
  `;
