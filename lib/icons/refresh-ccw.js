import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RefreshCcw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Refresh Ccw',
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
      aria-labelledby="${`title-refresh-ccw-${count}`}"
      aria-describedby="${`title-refresh-ccw-${count}`}"
    >
      <title id="${`title-refresh-ccw-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-refresh-ccw-${count}`}">${desc}</desc>
          `
        : html``}
      <polyline points="1 4 1 10 7 10" />
      <polyline points="23 20 23 14 17 14" />
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
    </svg>
  `;
};
