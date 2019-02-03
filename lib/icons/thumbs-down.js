import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ThumbsDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumbs Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
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
      aria-labelledby="${`title-thumbs-down-${count}`}"
      aria-describedby="${`title-thumbs-down-${count}`}"
    >
      <title id="${`title-thumbs-down-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-thumbs-down-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
      />
    </svg>
  `;
};
