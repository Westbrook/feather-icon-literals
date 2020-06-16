import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Thermometer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thermometer',
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
    aria-labelledby="${`title-thermometer-${count}`}"
    aria-describedby="${`title-thermometer-${count}`}"
  >
    <title id="${`title-thermometer-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-thermometer-${count}`}">${desc}</desc>` : html``}
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>`;
};
