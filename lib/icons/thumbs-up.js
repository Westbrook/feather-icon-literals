import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ThumbsUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumbs Up',
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
    aria-labelledby="${`title-thumbs-up-${count}`}"
    aria-describedby="${`title-thumbs-up-${count}`}"
  >
    <title id="${`title-thumbs-up-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-thumbs-up-${count}`}">${desc}</desc>` : html``}
    <path
      d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
    />
  </svg>`;
};
