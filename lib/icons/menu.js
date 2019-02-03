import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Menu = ({ width = 24, height = 24, hidden = false, title = 'Menu', desc } = {}) => {
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
      aria-labelledby="${`title-menu-${count}`}"
      aria-describedby="${`title-menu-${count}`}"
    >
      <title id="${`title-menu-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-menu-${count}`}">${desc}</desc>
          `
        : html``}
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  `;
};
