import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Right',
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
      aria-labelledby="${`title-chevron-right-${count}`}"
      aria-describedby="${`title-chevron-right-${count}`}"
    >
      <title id="${`title-chevron-right-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-chevron-right-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="9 18 15 12 9 6" />
    </svg>
  `;
};
