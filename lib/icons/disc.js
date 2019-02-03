import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Disc = ({ width = 24, height = 24, hidden = false, title = 'Disc', desc } = {}) => {
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
      aria-labelledby="${`title-disc-${count}`}"
      aria-describedby="${`title-disc-${count}`}"
    >
      <title id="${`title-disc-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-disc-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `;
};
