import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down',
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
      aria-labelledby="${`title-arrow-down-${count}`}"
      aria-describedby="${`title-arrow-down-${count}`}"
    >
      <title id="${`title-arrow-down-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-arrow-down-${count}`}">${desc}</desc>
          `
        : html``}
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  `;
};
