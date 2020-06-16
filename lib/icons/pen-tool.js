import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PenTool = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pen Tool',
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
    aria-labelledby="${`title-pen-tool-${count}`}"
    aria-describedby="${`title-pen-tool-${count}`}"
  >
    <title id="${`title-pen-tool-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-pen-tool-${count}`}">${desc}</desc>` : html``}
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>`;
};
