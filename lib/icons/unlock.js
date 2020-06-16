import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Unlock = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Unlock',
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
    aria-labelledby="${`title-unlock-${count}`}"
    aria-describedby="${`title-unlock-${count}`}"
  >
    <title id="${`title-unlock-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-unlock-${count}`}">${desc}</desc>` : html``}
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>`;
};
