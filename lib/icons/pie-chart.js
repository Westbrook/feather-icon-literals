import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PieChart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pie Chart',
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
    aria-labelledby="${`title-pie-chart-${count}`}"
    aria-describedby="${`title-pie-chart-${count}`}"
  >
    <title id="${`title-pie-chart-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-pie-chart-${count}`}">${desc}</desc>` : html``}
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>`;
};
