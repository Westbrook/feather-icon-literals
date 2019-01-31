import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PauseCircle = (
  { width: width, height: height, hidden: hidden, title: title, desc: desc } = {
    width: 24,
    height: 24,
    hidden: false,
    title: 'Pause Circle',
    desc: 'Pause Circle',
  },
) =>
  html`
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
      title="${title}"
    >
      <title>${title}</title>
      <desc>${desc}</desc>
      <circle cx="12" cy="12" r="10" />
      <line x1="10" y1="15" x2="10" y2="9" />
      <line x1="14" y1="15" x2="14" y2="9" />
    </svg>
  `;
