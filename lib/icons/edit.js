import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Edit = ({ width = 24, height = 24, hidden = false, title = 'Edit', desc } = {}) => {
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
    aria-labelledby="${`title-edit-${count}`}"
    aria-describedby="${`title-edit-${count}`}"
  >
    <title id="${`title-edit-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-edit-${count}`}">${desc}</desc>` : html``}
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>`;
};
