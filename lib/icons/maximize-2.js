import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Maximize2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Maximize 2',
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
      aria-labelledby="${`title-maximize-2-${count}`}"
      aria-describedby="${`title-maximize-2-${count}`}"
    >
      <title id="${`title-maximize-2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-maximize-2-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  `;
};
