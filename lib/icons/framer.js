import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Framer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Framer',
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
      aria-labelledby="${`title-framer-${count}`}"
      aria-describedby="${`title-framer-${count}`}"
    >
      <title id="${`title-framer-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-framer-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
    </svg>
  `;
};
