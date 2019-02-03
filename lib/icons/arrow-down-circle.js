import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowDownCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down Circle',
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
      aria-labelledby="${`title-arrow-down-circle-${count}`}"
      aria-describedby="${`title-arrow-down-circle-${count}`}"
    >
      <title id="${`title-arrow-down-circle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-arrow-down-circle-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 12 16 16 12" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </svg>
  `;
};
