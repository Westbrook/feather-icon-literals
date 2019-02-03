import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Anchor = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Anchor',
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
      aria-labelledby="${`title-anchor-${count}`}"
      aria-describedby="${`title-anchor-${count}`}"
    >
      <title id="${`title-anchor-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-anchor-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  `;
};
