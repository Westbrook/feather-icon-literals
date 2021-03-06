import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BatteryCharging = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Battery Charging',
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
    aria-labelledby="${`title-battery-charging-${count}`}"
    aria-describedby="${`title-battery-charging-${count}`}"
  >
    <title id="${`title-battery-charging-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-battery-charging-${count}`}">${desc}</desc>` : html``}
    <path
      d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
    />
    <line x1="23" y1="13" x2="23" y2="11" />
    <polyline points="11 6 7 12 13 12 9 18" />
  </svg>`;
};
