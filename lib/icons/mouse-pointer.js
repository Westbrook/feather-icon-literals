import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MousePointer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Mouse Pointer',
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
      aria-labelledby="${`title-mouse-pointer-${count}`}"
      aria-describedby="${`title-mouse-pointer-${count}`}"
    >
      <title id="${`title-mouse-pointer-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-mouse-pointer-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  `;
};
