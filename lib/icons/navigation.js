import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Navigation = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Navigation',
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
    aria-labelledby="${`title-navigation-${count}`}"
    aria-describedby="${`title-navigation-${count}`}"
  >
    <title id="${`title-navigation-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-navigation-${count}`}">${desc}</desc>` : html``}
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>`;
};
