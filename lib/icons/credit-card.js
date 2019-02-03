import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CreditCard = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Credit Card',
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
      aria-labelledby="${`title-credit-card-${count}`}"
      aria-describedby="${`title-credit-card-${count}`}"
    >
      <title id="${`title-credit-card-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-credit-card-${count}`}">${desc}</desc>
          `
        : html``}
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  `;
};
