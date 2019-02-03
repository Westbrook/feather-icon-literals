import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Eye = ({ width = 24, height = 24, hidden = false, title = 'Eye', desc } = {}) => {
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
      aria-labelledby="${`title-eye-${count}`}"
      aria-describedby="${`title-eye-${count}`}"
    >
      <title id="${`title-eye-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-eye-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `;
};
