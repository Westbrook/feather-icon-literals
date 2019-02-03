import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Folder = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder',
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
      aria-labelledby="${`title-folder-${count}`}"
      aria-describedby="${`title-folder-${count}`}"
    >
      <title id="${`title-folder-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-folder-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  `;
};
