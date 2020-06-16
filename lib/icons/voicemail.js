import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Voicemail = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Voicemail',
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
    aria-labelledby="${`title-voicemail-${count}`}"
    aria-describedby="${`title-voicemail-${count}`}"
  >
    <title id="${`title-voicemail-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-voicemail-${count}`}">${desc}</desc>` : html``}
    <circle cx="5.5" cy="11.5" r="4.5" />
    <circle cx="18.5" cy="11.5" r="4.5" />
    <line x1="5.5" y1="16" x2="18.5" y2="16" />
  </svg>`;
};
