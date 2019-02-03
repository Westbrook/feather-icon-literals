import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Volume = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume',
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
      aria-labelledby="${`title-volume-${count}`}"
      aria-describedby="${`title-volume-${count}`}"
    >
      <title id="${`title-volume-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-volume-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </svg>
  `;
};
