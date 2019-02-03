import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Edit3 = ({ width = 24, height = 24, hidden = false, title = 'Edit 3', desc } = {}) => {
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
      aria-labelledby="${`title-edit-3-${count}`}"
      aria-describedby="${`title-edit-3-${count}`}"
    >
      <title id="${`title-edit-3-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-edit-3-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
      <line x1="3" y1="22" x2="21" y2="22" />
    </svg>
  `;
};
