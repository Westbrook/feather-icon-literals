import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BarChart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bar Chart',
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
      aria-labelledby="${`title-bar-chart-${count}`}"
      aria-describedby="${`title-bar-chart-${count}`}"
    >
      <title id="${`title-bar-chart-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-bar-chart-${count}`}">${desc}</desc>
          `
        : html``}
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  `;
};
