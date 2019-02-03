import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerRightDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Right Down',
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
      aria-labelledby="${`title-corner-right-down-${count}`}"
      aria-describedby="${`title-corner-right-down-${count}`}"
    >
      <title id="${`title-corner-right-down-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-corner-right-down-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="10 15 15 20 20 15" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  `;
};
