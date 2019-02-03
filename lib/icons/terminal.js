import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Terminal = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Terminal',
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
      aria-labelledby="${`title-terminal-${count}`}"
      aria-describedby="${`title-terminal-${count}`}"
    >
      <title id="${`title-terminal-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-terminal-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  `;
};
