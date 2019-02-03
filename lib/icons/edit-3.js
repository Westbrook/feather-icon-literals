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
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `;
};
