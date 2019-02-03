import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateCcw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate Ccw',
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
      aria-labelledby="${`title-rotate-ccw-${count}`}"
      aria-describedby="${`title-rotate-ccw-${count}`}"
    >
      <title id="${`title-rotate-ccw-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-rotate-ccw-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  `;
};
