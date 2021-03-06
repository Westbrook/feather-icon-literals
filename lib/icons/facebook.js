import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Facebook = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Facebook',
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
    aria-labelledby="${`title-facebook-${count}`}"
    aria-describedby="${`title-facebook-${count}`}"
  >
    <title id="${`title-facebook-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-facebook-${count}`}">${desc}</desc>` : html``}
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>`;
};
