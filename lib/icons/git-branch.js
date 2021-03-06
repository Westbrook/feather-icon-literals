import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GitBranch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Branch',
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
    aria-labelledby="${`title-git-branch-${count}`}"
    aria-describedby="${`title-git-branch-${count}`}"
  >
    <title id="${`title-git-branch-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-git-branch-${count}`}">${desc}</desc>` : html``}
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>`;
};
