import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Repeat = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Repeat',
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
      aria-labelledby="${`title-repeat-${count}`}"
      aria-describedby="${`title-repeat-${count}`}"
    >
      <title id="${`title-repeat-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-repeat-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  `;
};
