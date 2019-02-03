import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BarChart2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bar Chart 2',
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
      aria-labelledby="${`title-bar-chart-2-${count}`}"
      aria-describedby="${`title-bar-chart-2-${count}`}"
    >
      <title id="${`title-bar-chart-2-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-bar-chart-2-${count}`}">${desc}</desc>
          `
        : html``}
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  `;
};
