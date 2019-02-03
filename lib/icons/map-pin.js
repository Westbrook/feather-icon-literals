import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MapPin = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Map Pin',
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
      aria-labelledby="${`title-map-pin-${count}`}"
      aria-describedby="${`title-map-pin-${count}`}"
    >
      <title id="${`title-map-pin-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-map-pin-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  `;
};
