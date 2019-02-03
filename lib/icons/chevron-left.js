import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Left',
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
      aria-labelledby="${`title-chevron-left-${count}`}"
      aria-describedby="${`title-chevron-left-${count}`}"
    >
      <title id="${`title-chevron-left-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-chevron-left-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="15 18 9 12 15 6" />
    </svg>
  `;
};
