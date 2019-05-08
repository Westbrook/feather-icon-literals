import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Hexagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Hexagon',
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
      aria-labelledby="${`title-hexagon-${count}`}"
      aria-describedby="${`title-hexagon-${count}`}"
    >
      <title id="${`title-hexagon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-hexagon-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      />
    </svg>
  `;
};
