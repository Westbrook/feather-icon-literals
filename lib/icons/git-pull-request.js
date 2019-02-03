import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GitPullRequest = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Pull Request',
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
      aria-labelledby="${`title-git-pull-request-${count}`}"
      aria-describedby="${`title-git-pull-request-${count}`}"
    >
      <title id="${`title-git-pull-request-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-git-pull-request-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" y1="9" x2="6" y2="21" />
    </svg>
  `;
};
