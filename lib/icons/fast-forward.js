import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FastForward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Fast Forward',
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
      aria-labelledby="${`title-fast-forward-${count}`}"
      aria-describedby="${`title-fast-forward-${count}`}"
    >
      <title id="${`title-fast-forward-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-fast-forward-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  `;
};
