import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Shield = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shield',
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
      aria-labelledby="${`title-shield-${count}`}"
      aria-describedby="${`title-shield-${count}`}"
    >
      <title id="${`title-shield-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-shield-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  `;
};
