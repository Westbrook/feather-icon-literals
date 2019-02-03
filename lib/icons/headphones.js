import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Headphones = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Headphones',
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
      aria-labelledby="${`title-headphones-${count}`}"
      aria-describedby="${`title-headphones-${count}`}"
    >
      <title id="${`title-headphones-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-headphones-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path
        d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
      />
    </svg>
  `;
};
