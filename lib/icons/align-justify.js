import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlignJustify = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Justify',
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
    aria-labelledby="${`title-align-justify-${count}`}"
    aria-describedby="${`title-align-justify-${count}`}"
  >
    <title id="${`title-align-justify-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-align-justify-${count}`}">${desc}</desc>` : html``}
    <line x1="21" y1="10" x2="3" y2="10" />
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="14" x2="3" y2="14" />
    <line x1="21" y1="18" x2="3" y2="18" />
  </svg>`;
};
