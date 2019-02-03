import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowUpRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up Right',
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
      aria-labelledby="${`title-arrow-up-right-${count}`}"
      aria-describedby="${`title-arrow-up-right-${count}`}"
    >
      <title id="${`title-arrow-up-right-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-arrow-up-right-${count}`}">${desc}</desc>
          `
        : html``}
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  `;
};
