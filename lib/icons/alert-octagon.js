import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlertOctagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Alert Octagon',
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
      aria-labelledby="${`title-alert-octagon-${count}`}"
      aria-describedby="${`title-alert-octagon-${count}`}"
    >
      <title id="${`title-alert-octagon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-alert-octagon-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
  `;
};
