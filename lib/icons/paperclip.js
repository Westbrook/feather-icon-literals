import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Paperclip = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Paperclip',
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
    aria-labelledby="${`title-paperclip-${count}`}"
    aria-describedby="${`title-paperclip-${count}`}"
  >
    <title id="${`title-paperclip-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-paperclip-${count}`}">${desc}</desc>` : html``}
    <path
      d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
    />
  </svg>`;
};
