import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BookOpen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Book Open',
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
      aria-labelledby="${`title-book-open-${count}`}"
      aria-describedby="${`title-book-open-${count}`}"
    >
      <title id="${`title-book-open-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-book-open-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  `;
};
