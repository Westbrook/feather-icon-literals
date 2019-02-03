import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Filter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filter',
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
      aria-labelledby="${`title-filter-${count}`}"
      aria-describedby="${`title-filter-${count}`}"
    >
      <title id="${`title-filter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-filter-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  `;
};
