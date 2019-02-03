import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Zap = ({ width = 24, height = 24, hidden = false, title = 'Zap', desc } = {}) => {
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
      aria-labelledby="${`title-zap-${count}`}"
      aria-describedby="${`title-zap-${count}`}"
    >
      <title id="${`title-zap-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-zap-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  `;
};
