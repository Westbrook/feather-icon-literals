import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShoppingCart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shopping Cart',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
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
      aria-labelledby="${`title-shopping-cart-${count}`}"
      aria-describedby="${`title-shopping-cart-${count}`}"
    >
      <title id="${`title-shopping-cart-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-shopping-cart-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  `;
};
