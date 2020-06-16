import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Edit2 = ({ width = 24, height = 24, hidden = false, title = 'Edit 2', desc } = {}) => {
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
    aria-labelledby="${`title-edit-2-${count}`}"
    aria-describedby="${`title-edit-2-${count}`}"
  >
    <title id="${`title-edit-2-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-edit-2-${count}`}">${desc}</desc>` : html``}
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>`;
};
