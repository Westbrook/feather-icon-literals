import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Triangle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Triangle',
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
    aria-labelledby="${`title-triangle-${count}`}"
    aria-describedby="${`title-triangle-${count}`}"
  >
    <title id="${`title-triangle-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-triangle-${count}`}">${desc}</desc>` : html``}
    <path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    />
  </svg>`;
};
