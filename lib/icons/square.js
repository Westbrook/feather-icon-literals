import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Square = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Square',
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
      aria-labelledby="${`title-square-${count}`}"
      aria-describedby="${`title-square-${count}`}"
    >
      <title id="${`title-square-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-square-${count}`}">${desc}</desc>
          `
        : html``}
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  `;
};
