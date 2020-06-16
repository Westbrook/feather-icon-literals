import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Navigation2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Navigation 2',
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
    aria-labelledby="${`title-navigation-2-${count}`}"
    aria-describedby="${`title-navigation-2-${count}`}"
  >
    <title id="${`title-navigation-2-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-navigation-2-${count}`}">${desc}</desc>` : html``}
    <polygon points="12 2 19 21 12 17 5 21 12 2" />
  </svg>`;
};
