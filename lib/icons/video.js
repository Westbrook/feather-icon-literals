import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Video = (
  { width: width, height: height, hidden: hidden, title: title, desc: desc } = {
    width: 24,
    height: 24,
    hidden: false,
    title: 'Video',
    desc: 'Video',
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
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  `;
