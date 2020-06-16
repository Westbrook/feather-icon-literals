import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GitCommit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Commit',
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
    aria-labelledby="${`title-git-commit-${count}`}"
    aria-describedby="${`title-git-commit-${count}`}"
  >
    <title id="${`title-git-commit-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-git-commit-${count}`}">${desc}</desc>` : html``}
    <circle cx="12" cy="12" r="4" />
    <line x1="1.05" y1="12" x2="7" y2="12" />
    <line x1="17.01" y1="12" x2="22.96" y2="12" />
  </svg>`;
};
