import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SkipBack = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Skip Back',
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
    aria-labelledby="${`title-skip-back-${count}`}"
    aria-describedby="${`title-skip-back-${count}`}"
  >
    <title id="${`title-skip-back-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-skip-back-${count}`}">${desc}</desc>` : html``}
    <polygon points="19 20 9 12 19 4 19 20" />
    <line x1="5" y1="19" x2="5" y2="5" />
  </svg>`;
};
