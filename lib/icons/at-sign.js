import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AtSign = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'At Sign',
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
    aria-labelledby="${`title-at-sign-${count}`}"
    aria-describedby="${`title-at-sign-${count}`}"
  >
    <title id="${`title-at-sign-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-at-sign-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>`;
};
