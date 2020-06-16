import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShoppingBag = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shopping Bag',
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
    aria-labelledby="${`title-shopping-bag-${count}`}"
    aria-describedby="${`title-shopping-bag-${count}`}"
  >
    <title id="${`title-shopping-bag-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-shopping-bag-${count}`}">${desc}</desc>` : html``}
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>`;
};
