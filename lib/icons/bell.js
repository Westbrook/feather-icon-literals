import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Bell = ({ width = 24, height = 24, hidden = false, title = 'Bell', desc } = {}) => {
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
      aria-labelledby="${`title-bell-${count}`}"
      aria-describedby="${`title-bell-${count}`}"
    >
      <title id="${`title-bell-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-bell-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  `;
};
