import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Tag = ({ width = 24, height = 24, hidden = false, title = 'Tag', desc } = {}) => {
  const count = iconCount++;
  return html`
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
      aria-labelledby="${`title-tag-${count}`}"
      aria-describedby="${`title-tag-${count}`}"
    >
      <title id="${`title-tag-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-tag-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  `;
};
