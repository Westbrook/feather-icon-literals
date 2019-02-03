import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Check',
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
      aria-labelledby="${`title-user-check-${count}`}"
      aria-describedby="${`title-user-check-${count}`}"
    >
      <title id="${`title-user-check-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-user-check-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  `;
};
