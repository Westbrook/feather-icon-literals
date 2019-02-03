import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerLeftDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Left Down',
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
      aria-labelledby="${`title-corner-left-down-${count}`}"
      aria-describedby="${`title-corner-left-down-${count}`}"
    >
      <title id="${`title-corner-left-down-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-corner-left-down-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="14 15 9 20 4 15" />
      <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </svg>
  `;
};
