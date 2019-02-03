import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Archive = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Archive',
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
      aria-labelledby="${`title-archive-${count}`}"
      aria-describedby="${`title-archive-${count}`}"
    >
      <title id="${`title-archive-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-archive-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  `;
};
