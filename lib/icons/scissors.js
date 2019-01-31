import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Scissors = (
  { width: width, height: height, hidden: hidden, title: title, desc: desc } = {
    width: 24,
    height: 24,
    hidden: false,
    title: 'Scissors',
    desc: 'Scissors',
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
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  `;
