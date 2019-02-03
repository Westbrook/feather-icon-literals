import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Code = ({ width = 24, height = 24, hidden = false, title = 'Code', desc } = {}) => {
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
      aria-labelledby="${`title-code-${count}`}"
      aria-describedby="${`title-code-${count}`}"
    >
      <title id="${`title-code-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-code-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  `;
};
