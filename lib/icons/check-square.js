import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CheckSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Check Square',
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
      aria-labelledby="${`title-check-square-${count}`}"
      aria-describedby="${`title-check-square-${count}`}"
    >
      <title id="${`title-check-square-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-check-square-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  `;
};
