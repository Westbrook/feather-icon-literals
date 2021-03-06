import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CameraOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Camera Off',
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
    aria-labelledby="${`title-camera-off-${count}`}"
    aria-describedby="${`title-camera-off-${count}`}"
  >
    <title id="${`title-camera-off-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-camera-off-${count}`}">${desc}</desc>` : html``}
    <line x1="1" y1="1" x2="23" y2="23" />
    <path
      d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
    />
  </svg>`;
};
