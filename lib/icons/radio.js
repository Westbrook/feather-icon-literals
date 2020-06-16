import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Radio = ({ width = 24, height = 24, hidden = false, title = 'Radio', desc } = {}) => {
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
    aria-labelledby="${`title-radio-${count}`}"
    aria-describedby="${`title-radio-${count}`}"
  >
    <title id="${`title-radio-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-radio-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="2" />
    <path
      d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
    />
  </svg>`;
};
