import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VideoOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Video Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`<svg
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
    aria-labelledby="${`title-video-off-${count}`}"
    aria-describedby="${`title-video-off-${count}`}"
  >
    <title id="${`title-video-off-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-video-off-${count}`}">${desc}</desc>` : html``}
    <path
      d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
    />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};
