import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Wifi = ({ width = 24, height = 24, hidden = false, title = 'Wifi', desc } = {}) => {
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
      aria-labelledby="${`title-wifi-${count}`}"
      aria-describedby="${`title-wifi-${count}`}"
    >
      <title id="${`title-wifi-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-wifi-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  `;
};
