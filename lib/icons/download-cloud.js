import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DownloadCloud = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Download Cloud',
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
    aria-labelledby="${`title-download-cloud-${count}`}"
    aria-describedby="${`title-download-cloud-${count}`}"
  >
    <title id="${`title-download-cloud-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-download-cloud-${count}`}">${desc}</desc>` : html``}
    <polyline points="8 17 12 21 16 17" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
  </svg>`;
};
