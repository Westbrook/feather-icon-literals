import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudLightning = (
  { width: width, height: height, hidden: hidden, title: title, desc: desc } = {
    width: 24,
    height: 24,
    hidden: false,
    title: 'Cloud Lightning',
    desc: 'Cloud Lightning',
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
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
      <polyline points="13 11 9 17 15 17 11 23" />
    </svg>
  `;
