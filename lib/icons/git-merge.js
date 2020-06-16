import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GitMerge = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Merge',
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
    aria-labelledby="${`title-git-merge-${count}`}"
    aria-describedby="${`title-git-merge-${count}`}"
  >
    <title id="${`title-git-merge-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-git-merge-${count}`}">${desc}</desc>` : html``}
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </svg>`;
};
