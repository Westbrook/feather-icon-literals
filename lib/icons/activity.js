import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Activity = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Activity',
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
    aria-labelledby="${`title-activity-${count}`}"
    aria-describedby="${`title-activity-${count}`}"
  >
    <title id="${`title-activity-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-activity-${count}`}">${desc}</desc>` : html``}
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>`;
};
