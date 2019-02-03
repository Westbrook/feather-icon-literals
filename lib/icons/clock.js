import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Clock = ({ width = 24, height = 24, hidden = false, title = 'Clock', desc } = {}) => {
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
      aria-labelledby="${`title-clock-${count}`}"
      aria-describedby="${`title-clock-${count}`}"
    >
      <title id="${`title-clock-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-clock-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  `;
};
