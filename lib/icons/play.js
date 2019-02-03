import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Play = ({ width = 24, height = 24, hidden = false, title = 'Play', desc } = {}) => {
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
      aria-labelledby="${`title-play-${count}`}"
      aria-describedby="${`title-play-${count}`}"
    >
      <title id="${`title-play-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-play-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  `;
};
