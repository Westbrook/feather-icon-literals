import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerRightUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Right Up',
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
      aria-labelledby="${`title-corner-right-up-${count}`}"
      aria-describedby="${`title-corner-right-up-${count}`}"
    >
      <title id="${`title-corner-right-up-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-corner-right-up-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="10 9 15 4 20 9" />
      <path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </svg>
  `;
};
