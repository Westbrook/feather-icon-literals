import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Droplet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Droplet',
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
    aria-labelledby="${`title-droplet-${count}`}"
    aria-describedby="${`title-droplet-${count}`}"
  >
    <title id="${`title-droplet-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-droplet-${count}`}">${desc}</desc>` : html``}
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>`;
};
