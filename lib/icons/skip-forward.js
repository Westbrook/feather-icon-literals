import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SkipForward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Skip Forward',
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
    aria-labelledby="${`title-skip-forward-${count}`}"
    aria-describedby="${`title-skip-forward-${count}`}"
  >
    <title id="${`title-skip-forward-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-skip-forward-${count}`}">${desc}</desc>` : html``}
    <polygon points="5 4 15 12 5 20 5 4" />
    <line x1="19" y1="5" x2="19" y2="19" />
  </svg>`;
};
