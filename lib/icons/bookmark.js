import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Bookmark = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bookmark',
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
      aria-labelledby="${`title-bookmark-${count}`}"
      aria-describedby="${`title-bookmark-${count}`}"
    >
      <title id="${`title-bookmark-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-bookmark-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  `;
};
