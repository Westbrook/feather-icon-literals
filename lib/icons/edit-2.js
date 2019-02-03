import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Edit2 = ({ width = 24, height = 24, hidden = false, title = 'Edit 2', desc } = {}) => {
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
      aria-labelledby="${`title-edit-2-${count}`}"
      aria-describedby="${`title-edit-2-${count}`}"
    >
      <title id="${`title-edit-2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-edit-2-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
    </svg>
  `;
};
