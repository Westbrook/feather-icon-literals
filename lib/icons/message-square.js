import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MessageSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Message Square',
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
    aria-labelledby="${`title-message-square-${count}`}"
    aria-describedby="${`title-message-square-${count}`}"
  >
    <title id="${`title-message-square-${count}`}">${title}</title>
    ${desc ? html`<desc id="${`desc-message-square-${count}`}">${desc}</desc>` : html``}
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>`;
};
