import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StopCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Stop Circle',
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
      aria-labelledby="${`title-stop-circle-${count}`}"
      aria-describedby="${`title-stop-circle-${count}`}"
    >
      <title id="${`title-stop-circle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-stop-circle-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="12" cy="12" r="10" />
      <rect x="9" y="9" width="6" height="6" />
    </svg>
  `;
};
