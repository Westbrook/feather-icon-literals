import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ToggleLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Toggle Left',
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
    aria-labelledby="${`title-toggle-left-${count}`}"
    aria-describedby="${`title-toggle-left-${count}`}"
  >
    <title id="${`title-toggle-left-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-toggle-left-${count}`}">${desc}</desc>` : html``}
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <circle cx="8" cy="12" r="3" />
  </svg>`;
};
