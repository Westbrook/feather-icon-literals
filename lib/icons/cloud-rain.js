import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudRain = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Rain',
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
      aria-labelledby="${`title-cloud-rain-${count}`}"
      aria-describedby="${`title-cloud-rain-${count}`}"
    >
      <title id="${`title-cloud-rain-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-cloud-rain-${count}`}">${desc}</desc>
          `
        : html``}
      <line x1="16" y1="13" x2="16" y2="21" />
      <line x1="8" y1="13" x2="8" y2="21" />
      <line x1="12" y1="15" x2="12" y2="23" />
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
    </svg>
  `;
};
