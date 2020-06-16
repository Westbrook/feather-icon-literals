import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Dribbble = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Dribbble',
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
    aria-labelledby="${`title-dribbble-${count}`}"
    aria-describedby="${`title-dribbble-${count}`}"
  >
    <title id="${`title-dribbble-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-dribbble-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="10" />
    <path
      d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
    />
  </svg>`;
};
