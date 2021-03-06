import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const HelpCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Help Circle',
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
    aria-labelledby="${`title-help-circle-${count}`}"
    aria-describedby="${`title-help-circle-${count}`}"
  >
    <title id="${`title-help-circle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-help-circle-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>`;
};
