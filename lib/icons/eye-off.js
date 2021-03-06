import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EyeOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Eye Off',
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
    aria-labelledby="${`title-eye-off-${count}`}"
    aria-describedby="${`title-eye-off-${count}`}"
  >
    <title id="${`title-eye-off-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-eye-off-${count}`}">${desc}</desc>` : html``}
    <path
      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
    />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};
