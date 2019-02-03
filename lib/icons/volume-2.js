import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Volume2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume 2',
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
      aria-labelledby="${`title-volume-2-${count}`}"
      aria-describedby="${`title-volume-2-${count}`}"
    >
      <title id="${`title-volume-2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-volume-2-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  `;
};
