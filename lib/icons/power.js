import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Power = ({ width = 24, height = 24, hidden = false, title = 'Power', desc } = {}) => {
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
      aria-labelledby="${`title-power-${count}`}"
      aria-describedby="${`title-power-${count}`}"
    >
      <title id="${`title-power-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-power-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  `;
};
