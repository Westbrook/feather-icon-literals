import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Maximize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Maximize',
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
      aria-labelledby="${`title-maximize-${count}`}"
      aria-describedby="${`title-maximize-${count}`}"
    >
      <title id="${`title-maximize-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-maximize-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
      />
    </svg>
  `;
};
