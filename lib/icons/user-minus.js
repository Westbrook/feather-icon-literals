import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserMinus = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Minus',
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
    aria-labelledby="${`title-user-minus-${count}`}"
    aria-describedby="${`title-user-minus-${count}`}"
  >
    <title id="${`title-user-minus-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-user-minus-${count}`}">${desc}</desc>` : html``}
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>`;
};
