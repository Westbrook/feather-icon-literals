import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RefreshCw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Refresh Cw',
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
      aria-labelledby="${`title-refresh-cw-${count}`}"
      aria-describedby="${`title-refresh-cw-${count}`}"
    >
      <title id="${`title-refresh-cw-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-refresh-cw-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  `;
};
