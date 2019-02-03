import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudLightning = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Lightning',
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
      aria-labelledby="${`title-cloud-lightning-${count}`}"
      aria-describedby="${`title-cloud-lightning-${count}`}"
    >
      <title id="${`title-cloud-lightning-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-cloud-lightning-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
      <polyline points="13 11 9 17 15 17 11 23" />
    </svg>
  `;
};
