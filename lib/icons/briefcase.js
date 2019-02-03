import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Briefcase = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Briefcase',
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
      aria-labelledby="${`title-briefcase-${count}`}"
      aria-describedby="${`title-briefcase-${count}`}"
    >
      <title id="${`title-briefcase-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-briefcase-${count}`}">${desc}</desc>
          `
        : html``}
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  `;
};
