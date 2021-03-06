import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Delete = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Delete',
  desc,
} = {}) => {
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
    aria-labelledby="${`title-delete-${count}`}"
    aria-describedby="${`title-delete-${count}`}"
  >
    <title id="${`title-delete-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-delete-${count}`}">${desc}</desc>` : html``}
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
    <line x1="18" y1="9" x2="12" y2="15" />
    <line x1="12" y1="9" x2="18" y2="15" />
  </svg>`;
};
