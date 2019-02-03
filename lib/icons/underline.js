import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Underline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Underline',
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
      aria-labelledby="${`title-underline-${count}`}"
      aria-describedby="${`title-underline-${count}`}"
    >
      <title id="${`title-underline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-underline-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </svg>
  `;
};
