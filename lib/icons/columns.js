import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Columns = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Columns',
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
    aria-labelledby="${`title-columns-${count}`}"
    aria-describedby="${`title-columns-${count}`}"
  >
    <title id="${`title-columns-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-columns-${count}`}">${desc}</desc>` : html``}
    <path
      d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
    />
  </svg>`;
};
