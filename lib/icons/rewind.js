import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Rewind = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rewind',
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
      aria-labelledby="${`title-rewind-${count}`}"
      aria-describedby="${`title-rewind-${count}`}"
    >
      <title id="${`title-rewind-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-rewind-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  `;
};
