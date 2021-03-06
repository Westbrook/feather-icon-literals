import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Minimize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minimize',
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
    aria-labelledby="${`title-minimize-${count}`}"
    aria-describedby="${`title-minimize-${count}`}"
  >
    <title id="${`title-minimize-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-minimize-${count}`}">${desc}</desc>` : html``}
    <path
      d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
    />
  </svg>`;
};
