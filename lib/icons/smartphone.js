import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Smartphone = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Smartphone',
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
      aria-labelledby="${`title-smartphone-${count}`}"
      aria-describedby="${`title-smartphone-${count}`}"
    >
      <title id="${`title-smartphone-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-smartphone-${count}`}">${desc}</desc>
          `
        : html``}
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  `;
};
