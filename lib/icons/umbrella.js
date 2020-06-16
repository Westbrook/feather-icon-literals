import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Umbrella = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Umbrella',
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
    aria-labelledby="${`title-umbrella-${count}`}"
    aria-describedby="${`title-umbrella-${count}`}"
  >
    <title id="${`title-umbrella-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-umbrella-${count}`}">${desc}</desc>` : html``}
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
  </svg>`;
};
