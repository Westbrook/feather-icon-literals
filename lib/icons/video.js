import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Video = ({ width = 24, height = 24, hidden = false, title = 'Video', desc } = {}) => {
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
      aria-labelledby="${`title-video-${count}`}"
      aria-describedby="${`title-video-${count}`}"
    >
      <title id="${`title-video-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-video-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  `;
};
