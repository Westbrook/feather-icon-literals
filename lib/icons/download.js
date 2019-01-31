import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Download = (
  { width: width, height: height, hidden: hidden, title: title, desc: desc } = {
    width: 24,
    height: 24,
    hidden: false,
    title: 'Download',
    desc: 'Download',
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  `;
