import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Inbox = ({ width = 24, height = 24, hidden = false, title = 'Inbox', desc } = {}) => {
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
    aria-labelledby="${`title-inbox-${count}`}"
    aria-describedby="${`title-inbox-${count}`}"
  >
    <title id="${`title-inbox-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-inbox-${count}`}">${desc}</desc>` : html``}
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path
      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    />
  </svg>`;
};
