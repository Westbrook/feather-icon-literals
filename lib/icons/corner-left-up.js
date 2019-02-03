import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerLeftUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Left Up',
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
      aria-labelledby="${`title-corner-left-up-${count}`}"
      aria-describedby="${`title-corner-left-up-${count}`}"
    >
      <title id="${`title-corner-left-up-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-corner-left-up-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="14 9 9 4 4 9" />
      <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </svg>
  `;
};
