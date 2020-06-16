import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DollarSign = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Dollar Sign',
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
    aria-labelledby="${`title-dollar-sign-${count}`}"
    aria-describedby="${`title-dollar-sign-${count}`}"
  >
    <title id="${`title-dollar-sign-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-dollar-sign-${count}`}">${desc}</desc>` : html``}
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>`;
};
