import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Wind = ({ width = 24, height = 24, hidden = false, title = 'Wind', desc } = {}) => {
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
    aria-labelledby="${`title-wind-${count}`}"
    aria-describedby="${`title-wind-${count}`}"
  >
    <title id="${`title-wind-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-wind-${count}`}">${desc}</desc>` : html``}
    <path
      d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
    />
  </svg>`;
};
