import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Octagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Octagon',
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
      aria-labelledby="${`title-octagon-${count}`}"
      aria-describedby="${`title-octagon-${count}`}"
    >
      <title id="${`title-octagon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-octagon-${count}`}">${desc}</desc>
          `
        : html``}
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    </svg>
  `;
};
