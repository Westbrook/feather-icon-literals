import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Cast = ({ width = 24, height = 24, hidden = false, title = 'Cast', desc } = {}) => {
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
      aria-labelledby="${`title-cast-${count}`}"
      aria-describedby="${`title-cast-${count}`}"
    >
      <title id="${`title-cast-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-cast-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
      />
      <line x1="2" y1="20" x2="2" y2="20" />
    </svg>
  `;
};
