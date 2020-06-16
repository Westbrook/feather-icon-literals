import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Link2 = ({ width = 24, height = 24, hidden = false, title = 'Link 2', desc } = {}) => {
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
    aria-labelledby="${`title-link-2-${count}`}"
    aria-describedby="${`title-link-2-${count}`}"
  >
    <title id="${`title-link-2-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-link-2-${count}`}">${desc}</desc>` : html``}
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};
