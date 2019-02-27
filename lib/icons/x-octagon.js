import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const XOctagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'X Octagon',
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
      aria-labelledby="${`title-x-octagon-${count}`}"
      aria-describedby="${`title-x-octagon-${count}`}"
    >
      <title id="${`title-x-octagon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-x-octagon-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  `;
};
